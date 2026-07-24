import { Component, OnInit, OnChanges, Input, SimpleChanges } from '@angular/core';
import { Mutant } from '../model/Mutant';
import { QCircuit } from '../model/QCircuit';

export interface VisualCell {
  gate: any;
  type: 'wire' | 'gate' | 'control' | 'anti-control' | 'target' | 'swap' | 'measure' | 'placeholder';
  isMutated: boolean;
  label: string;
  wireIndex: number;
  localColIndex?: number;
  localRowIndex?: number;
  gateHeight: number;
  oraclePath: string[];
}

export interface OracleBox {
  name: string;
  startCol: number;
  endCol: number;
  startRow: number;
  endRow: number;
  depth: number;
  // Number of deeper oracle headers stacked above this box's top edge
  // (0 = innermost at its position). Used to stagger nested title bands.
  headerSlot: number;
}

@Component({
  selector: 'app-circuit-viewer',
  templateUrl: './circuit-viewer.component.html',
  styleUrls: ['./circuit-viewer.component.css']
})
export class CircuitViewerComponent implements OnInit, OnChanges {
  @Input() quirkCode: any;
  @Input() isMutant: boolean = false;
  @Input() mutant: Mutant | null = null;

  // Visual configuration parameters
  readonly wireSpacing = 60;
  readonly colWidth = 70;
  readonly paddingX = 90;
  readonly paddingY = 90;
  readonly headerBand = 16;
  readonly gateSize = 38;

  // SVG dimensions
  svgWidth = 800;
  svgHeight = 400;

  // Render State
  numWires = 0;
  visualCols: VisualCell[][] = [];
  oracleBoxes: OracleBox[] = [];
  gatesMap = new Map<string, any>();
  wireInits: any[] = [];

  // Interactive Zoom/Pan State
  zoomScale = 1.0;
  panX = 0;
  panY = 0;
  isDragging = false;
  dragStartX = 0;
  dragStartY = 0;

  // Tooltip State
  hoveredCell: VisualCell | null = null;
  tooltipX = 0;
  tooltipY = 0;

  constructor() {}

  ngOnInit(): void {
    this.processQuirkCode();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.processQuirkCode();
  }

  private processQuirkCode(): void {
    let parsed: any = null;
    if (this.quirkCode) {
      if (typeof this.quirkCode === 'string') {
        try {
          parsed = JSON.parse(this.quirkCode);
        } catch (e) {
          console.error('Error parsing quirkCode in circuit-viewer:', e);
        }
      } else {
        parsed = this.quirkCode;
      }
    }

    if (!parsed || !parsed.cols) {
      this.visualCols = [];
      this.oracleBoxes = [];
      this.numWires = 0;
      this.wireInits = [];
      return;
    }

    // Initial qubit states (Quirk "init" array). Values: 0,1,"+","-","i","-i".
    this.wireInits = Array.isArray(parsed.init) ? parsed.init : [];

    // 1. Build Custom Gates Map
    this.gatesMap.clear();
    if (Array.isArray(parsed.gates)) {
      for (const gate of parsed.gates) {
        if (gate && typeof gate.id === 'string') {
          this.gatesMap.set(gate.id, gate);
        }
      }
    }

    // 2. Calculate Qubits
    this.numWires = this.calculateCircuitQubits(parsed);

    // 3. Layout the circuit recursively
    this.oracleBoxes = [];
    this.visualCols = [];
    
    // We call expandColumns on the top-level cols.
    const result = this.expandColumns(parsed.cols, 0, 0, [], 0);
    this.visualCols = result.visualCols;

    // For each oracle box, count how many deeper oracle headers share its top
    // edge and column span, so their title bands can be stacked without overlap.
    for (const box of this.oracleBoxes) {
      let localMaxDepth = box.depth;
      for (const other of this.oracleBoxes) {
        if (
          other !== box &&
          other.startRow === box.startRow &&
          other.startCol <= box.endCol &&
          other.endCol >= box.startCol &&
          other.depth > localMaxDepth
        ) {
          localMaxDepth = other.depth;
        }
      }
      box.headerSlot = localMaxDepth - box.depth;
    }

    // 4. Update SVG Dimensions
    const totalCols = this.visualCols.length;
    this.svgWidth = this.paddingX * 2 + Math.max(1, totalCols) * this.colWidth;
    this.svgHeight = this.paddingY * 2 + Math.max(1, this.numWires) * this.wireSpacing;
  }

  // Recursive Layout Expansion
  private expandColumns(
    cols: any[],
    offsetRow: number,
    startCol: number,
    oraclePath: string[],
    depth: number
  ): { visualCols: VisualCell[][]; width: number } {
    const localVisualCols: VisualCell[][] = [];
    let currentVisualCol = startCol;
    
    for (let c = 0; c < cols.length; c++) {
      const col = cols[c];
      if (!Array.isArray(col)) {
        continue;
      }

      // Check if there are any custom oracle gates in this column that have inner circuits
      const oraclesInCol: { row: number; id: string; def: any; height: number }[] = [];
      for (let r = 0; r < col.length; r++) {
        const cell = col[r];
        if (typeof cell === 'string' && cell.startsWith('~')) {
          const gateDef = this.gatesMap.get(cell);
          if (this.hasExpandableCircuit(gateDef)) {
            oraclesInCol.push({
              row: r,
              id: cell,
              def: gateDef,
              height: this.getGateHeight(cell)
            });
          }
        }
      }

      if (oraclesInCol.length === 0) {
        // Normal column - generate exactly 1 visual column
        const newCol: VisualCell[] = this.buildNormalVisualColumn(col, c, offsetRow, oraclePath);
        localVisualCols.push(newCol);
        currentVisualCol++;
      } else {
        // Column containing oracles to expand.
        const oracleLayouts = oraclesInCol.map(oracle => {
          const layout = this.expandColumns(
            oracle.def.circuit.cols,
            offsetRow + oracle.row,
            currentVisualCol,
            [...oraclePath, oracle.def.name || oracle.def.id],
            depth + 1
          );
          return {
            oracle,
            layout,
            width: layout.visualCols.length
          };
        });

        // Determine width of this expanded section
        const maxInnerCols = Math.max(1, ...oracleLayouts.map(ol => ol.width));

        // Build the un-expanded column once; used for wires not covered by any oracle.
        const normalCol = this.buildNormalVisualColumn(col, c, offsetRow, oraclePath);

        // Register Oracle Boxes
        for (const ol of oracleLayouts) {
          this.oracleBoxes.push({
            name: ol.oracle.def.name || ol.oracle.def.id,
            startCol: currentVisualCol,
            endCol: currentVisualCol + ol.width - 1,
            startRow: offsetRow + ol.oracle.row,
            endRow: offsetRow + ol.oracle.row + ol.oracle.height - 1,
            depth: depth,
            headerSlot: 0
          });
        }

        // Build the expanded visual columns
        for (let k = 0; k < maxInnerCols; k++) {
          const newCol: VisualCell[] = [];
          for (let y = 0; y < this.numWires; y++) {
            // Find if wire y is covered by any oracle in this column
            const coveringOracle = oracleLayouts.find(ol => {
              const startY = offsetRow + ol.oracle.row;
              const endY = startY + ol.oracle.height - 1;
              return y >= startY && y <= endY;
            });

            if (coveringOracle) {
              // Inner visual columns are built at full global height and indexed
              // by absolute wire index, so read directly at wire y.
              const innerCols = coveringOracle.layout.visualCols;

              if (k < innerCols.length && y < innerCols[k].length) {
                newCol.push(innerCols[k][y]);
              } else {
                newCol.push({
                  gate: 1,
                  type: 'wire',
                  isMutated: false,
                  label: '',
                  wireIndex: y,
                  gateHeight: 1,
                  oraclePath: [...oraclePath, coveringOracle.oracle.def.name || coveringOracle.oracle.def.id]
                });
              }
            } else {
              // Wire y is not covered by any oracle.
              if (k === 0) {
                newCol.push(normalCol[y]);
              } else {
                newCol.push({
                  gate: 1,
                  type: 'wire',
                  isMutated: false,
                  label: '',
                  wireIndex: y,
                  gateHeight: 1,
                  oraclePath: oraclePath
                });
              }
            }
          }
          localVisualCols.push(newCol);
        }
        currentVisualCol += maxInnerCols;
      }
    }

    return {
      visualCols: localVisualCols,
      width: localVisualCols.length
    };
  }

  // Build a single normal visual column
  private buildNormalVisualColumn(
    col: any[],
    colIndex: number,
    offsetRow: number,
    oraclePath: string[]
  ): VisualCell[] {
    const newCol: VisualCell[] = [];
    const hasControls = col.some(cell => cell === '•' || cell === '◦');

    // Track vertical span height overrides to skip subsequent placeholder cells
    let skipRows = 0;

    for (let r = 0; r < this.numWires; r++) {
      if (skipRows > 0) {
        newCol.push({
          gate: 1,
          type: 'placeholder',
          isMutated: false,
          label: '',
          wireIndex: r,
          localColIndex: colIndex,
          localRowIndex: r - offsetRow,
          gateHeight: 1,
          oraclePath: oraclePath
        });
        skipRows--;
        continue;
      }

      const relativeRow = r - offsetRow;
      const cell = (relativeRow >= 0 && relativeRow < col.length) ? col[relativeRow] : 1;

      const cellType = this.getCellType(cell, hasControls);
      const height = this.getGateHeight(cell);

      if (height > 1) {
        skipRows = height - 1;
      }

      const isMutated = this.checkIfMutated(colIndex, relativeRow, oraclePath);

      newCol.push({
        gate: cell,
        type: cellType,
        isMutated: isMutated,
        label: this.getGateLabel(cell),
        wireIndex: r,
        localColIndex: colIndex,
        localRowIndex: relativeRow,
        gateHeight: height,
        oraclePath: oraclePath
      });
    }

    return newCol;
  }

  // A custom gate is only worth expanding (inlining its inner circuit with a
  // titled box) when it actually has content. An empty sub-circuit would expand
  // to zero columns, producing an inverted oracle box (endCol < startCol, i.e.
  // negative width) and swallowing the gate itself; instead we let it render as a
  // normal single labelled box.
  private hasExpandableCircuit(gateDef: any): boolean {
    return !!(
      gateDef &&
      gateDef.circuit &&
      Array.isArray(gateDef.circuit.cols) &&
      gateDef.circuit.cols.some((c: any) => Array.isArray(c) && c.length > 0)
    );
  }

  private getCellType(cell: any, hasControls: boolean): VisualCell['type'] {
    if (cell === null || cell === undefined || cell === 1 || cell === '') {
      return 'wire';
    }
    if (cell === '•') {
      return 'control';
    }
    if (cell === '◦') {
      return 'anti-control';
    }
    if (cell === 'Swap') {
      return 'swap';
    }
    if (cell === 'Measure') {
      return 'measure';
    }
    if (cell === '⊕' || (cell === 'X' && hasControls)) {
      return 'target';
    }
    return 'gate';
  }

  private getGateHeight(cell: any): number {
    if (typeof cell !== 'string' || !cell.startsWith('~')) {
      return 1;
    }
    const gateDef = this.gatesMap.get(cell);
    if (!gateDef) {
      return 1;
    }
    if (gateDef.matrix) {
      const len = Array.isArray(gateDef.matrix) ? gateDef.matrix.length : 0;
      if (len > 0) {
        return Math.round(Math.log2(len));
      }
    } else if (gateDef.circuit) {
      return this.calculateCircuitQubits(gateDef.circuit);
    }
    return 1;
  }

  private calculateCircuitQubits(circuit: any): number {
    if (!circuit || !Array.isArray(circuit.cols)) {
      return 1;
    }
    let maxQubits = 1;
    for (const col of circuit.cols) {
      if (Array.isArray(col)) {
        for (let i = 0; i < col.length; i++) {
          const h = this.getGateHeight(col[i]);
          if (i + h > maxQubits) {
            maxQubits = i + h;
          }
        }
      }
    }
    return maxQubits;
  }

  private getGateLabel(cell: any): string {
    if (cell === null || cell === undefined || cell === 1 || cell === '') {
      return '';
    }
    if (typeof cell === 'string') {
      if (cell.startsWith('~')) {
        const gateDef = this.gatesMap.get(cell);
        return gateDef ? (gateDef.name || gateDef.id) : cell;
      }
      return cell;
    }
    return JSON.stringify(cell);
  }

  private checkIfMutated(colIdx: number, rowIdx: number, oraclePath: string[]): boolean {
    if (!this.isMutant || !this.mutant) {
      return false;
    }

    const mutCol = this.mutant.mutatedColumn;
    const mutRow = this.mutant.mutatedRow;
    const mutOracle = this.mutant.oracleName;

    // Normalization helper to strip non-alphanumeric chars and trailing _instance numbers
    const normalize = (s: string): string => {
      if (!s) return '';
      const clean = s.replace(/_\d+$/, '');
      return clean.replace(/[^a-zA-Z0-9]/g, '').toLowerCase().trim();
    };

    if (mutOracle) {
      const normMut = normalize(mutOracle);
      const isInsideMutatedOracle = oraclePath.some(id => {
        if (normalize(id) === normMut) return true;
        const gateDef = this.gatesMap.get(id);
        if (gateDef) {
          if (normalize(gateDef.name || '') === normMut || normalize(gateDef.id || '') === normMut) {
            return true;
          }
        }
        return false;
      });
      return isInsideMutatedOracle && colIdx === mutCol && rowIdx === mutRow;
    } else {
      return oraclePath.length === 0 && colIdx === mutCol && rowIdx === mutRow;
    }
  }

  // Initial state ket for a wire (defaults to |0⟩ when no init is given).
  getInitState(wireIndex: number): string {
    const v = this.wireInits[wireIndex];
    switch (v === null || v === undefined ? '0' : String(v)) {
      case '1': return '|1⟩';
      case '+': return '|+⟩';
      case '-': return '|−⟩';
      case 'i': return '|i⟩';
      case '-i': return '|−i⟩';
      default: return '|0⟩';
    }
  }

  // Whether a wire keeps the default |0⟩ initialization.
  isDefaultInit(wireIndex: number): boolean {
    const v = this.wireInits[wireIndex];
    return v === null || v === undefined || String(v) === '0';
  }

  getVerticalLineCoords(c: number): { y1: number; y2: number }[] {
    const col = this.visualCols[c];
    if (!col) return [];

    // Group interactive cells by oracle path so a connector never bridges two
    // different oracles (or an oracle and a top-level gate) in the same column.
    const groups = new Map<string, number[]>();
    for (const cell of col) {
      if (
        cell.type === 'control' ||
        cell.type === 'anti-control' ||
        cell.type === 'target' ||
        cell.type === 'swap' ||
        cell.type === 'gate'
      ) {
        const key = cell.oraclePath.join('');
        const wires = groups.get(key);
        if (wires) {
          wires.push(cell.wireIndex);
        } else {
          groups.set(key, [cell.wireIndex]);
        }
      }
    }

    const coords: { y1: number; y2: number }[] = [];
    for (const wires of groups.values()) {
      if (wires.length < 2) continue;
      coords.push({
        y1: this.paddingY + Math.min(...wires) * this.wireSpacing,
        y2: this.paddingY + Math.max(...wires) * this.wireSpacing
      });
    }
    return coords;
  }

  zoomIn(): void {
    this.zoomScale = Math.min(2.5, this.zoomScale + 0.15);
  }

  zoomOut(): void {
    this.zoomScale = Math.max(0.4, this.zoomScale - 0.15);
  }

  resetZoom(): void {
    this.zoomScale = 1.0;
    this.panX = 0;
    this.panY = 0;
  }

  onMouseDown(event: MouseEvent): void {
    if (event.button !== 0) return;
    this.isDragging = true;
    this.dragStartX = event.clientX - this.panX;
    this.dragStartY = event.clientY - this.panY;
  }

  onMouseMove(event: MouseEvent): void {
    if (this.isDragging) {
      this.panX = event.clientX - this.dragStartX;
      this.panY = event.clientY - this.dragStartY;
    }
  }

  onMouseUp(): void {
    this.isDragging = false;
  }

  showTooltip(event: MouseEvent, cell: VisualCell): void {
    if (cell.type === 'wire' || cell.type === 'placeholder') {
      this.hoveredCell = null;
      return;
    }
    this.hoveredCell = cell;
    
    const rect = (event.currentTarget as SVGElement).getBoundingClientRect();
    const parentRect = (event.currentTarget as SVGElement).ownerSVGElement?.getBoundingClientRect();
    
    if (parentRect) {
      this.tooltipX = rect.left - parentRect.left + rect.width / 2;
      this.tooltipY = rect.top - parentRect.top - 10;
    } else {
      this.tooltipX = event.clientX;
      this.tooltipY = event.clientY;
    }
  }

  hideTooltip(): void {
    this.hoveredCell = null;
  }

  getGateDescription(cell: VisualCell): string {
    if (cell.isMutated) {
      let desc = `⚠️ MUTATION DETECTED: `;
      if (this.mutant?.mutationOperator) {
        desc += `Operator: ${this.mutant.mutationOperator}. `;
      }
      desc += `Modified gate at original Column ${cell.localColIndex}, Row ${cell.localRowIndex}`;
      if (cell.oraclePath.length > 0) {
        desc += ` inside Oracle "${cell.oraclePath.join(' -> ')}"`;
      }
      return desc;
    }

    const typeDescMap: { [key: string]: string } = {
      'control': 'Control Dot (•): Activates the target gate when the qubit is |1⟩',
      'anti-control': 'Anti-Control Dot (◦): Activates the target gate when the qubit is |0⟩',
      'target': 'Target (⊕): Inverts the target qubit state when control conditions are met',
      'swap': 'Swap Gate (x): Interchanges the states of two qubits',
      'measure': 'Measurement Gate: Collapses the quantum state and reads the classical value',
      'gate': `Gate "${cell.label}": Applies operation to the qubit`
    };

    let base = typeDescMap[cell.type] || `Gate (${cell.label})`;
    if (cell.oraclePath.length > 0) {
      base += ` (Inside Oracle: ${cell.oraclePath.join(' -> ')})`;
    }
    return base;
  }
}
