import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Operator } from '../../model/OperatorFamily';
import { parseOperator, gateParts } from '../../model/operator-labels';

export interface GateGroup {
  name: string;
  gates: { gate: string; parts: { base: string; exp: string } }[];
}

export interface SwapRow {
  from: string;
  targets: { to: string; op: Operator }[];
}

@Component({
  selector: 'app-operator-grid',
  templateUrl: './operator-grid.component.html',
  styleUrls: ['./operator-grid.component.css']
})
export class OperatorGridComponent implements OnChanges {
  @Input() operators: Operator[] = [];

  public mode: 'list' | 'addGate' | 'swap' = 'list';

  // addGate mode state
  public readonly positions = [
    { key: 'Start', title: 'At the start' },
    { key: 'End', title: 'At the end' },
    { key: 'Random', title: 'At a random position' }
  ];
  public gateGroups: GateGroup[] = [];
  private addGateMap: Map<string, Operator> = new Map();

  // swap mode state
  public swapRows: SwapRow[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['operators']) {
      this.recalculateGrid();
    }
  }

  private recalculateGrid(): void {
    this.addGateMap.clear();
    this.gateGroups = [];
    this.swapRows = [];

    if (!this.operators || this.operators.length === 0) {
      this.mode = 'list';
      return;
    }

    const parsedList = this.operators.map(op => ({
      op,
      parsed: parseOperator(op.name || '')
    }));

    const allAddGate = parsedList.every(item => item.parsed.kind === 'addGate');
    const allSwap = parsedList.every(item => item.parsed.kind === 'swap');

    if (allAddGate) {
      this.mode = 'addGate';
      const groupsMap = new Map<string, { gate: string; parts: { base: string; exp: string } }[]>();

      for (const item of parsedList) {
        const gate = item.parsed.gate || '';
        const pos = item.parsed.position || '';
        this.addGateMap.set(`${pos}_${gate}`, item.op);

        const parts = gateParts(gate);
        const base = parts.base || 'Other';
        if (!groupsMap.has(base)) {
          groupsMap.set(base, []);
        }
        const list = groupsMap.get(base)!;
        if (!list.some(g => g.gate === gate)) {
          list.push({ gate, parts });
        }
      }

      this.gateGroups = Array.from(groupsMap.entries()).map(([name, gates]) => ({
        name,
        gates
      }));
    } else if (allSwap) {
      this.mode = 'swap';
      const rowsMap = new Map<string, { to: string; op: Operator }[]>();

      for (const item of parsedList) {
        const from = item.parsed.from || '';
        const to = item.parsed.to || '';
        if (!rowsMap.has(from)) {
          rowsMap.set(from, []);
        }
        rowsMap.get(from)!.push({ to, op: item.op });
      }

      this.swapRows = Array.from(rowsMap.entries()).map(([from, targets]) => ({
        from,
        targets
      }));
    } else {
      this.mode = 'list';
    }
  }

  public cell(pos: string, gate: string): Operator | undefined {
    return this.addGateMap.get(`${pos}_${gate}`);
  }

  public toggle(op: Operator): void {
    if (op) {
      op.selected = !op.selected;
    }
  }

  public setAll(ops: Operator[]): void {
    if (!ops || ops.length === 0) return;
    const allSelected = ops.every(o => o.selected);
    ops.forEach(o => (o.selected = !allSelected));
  }

  public opsOfPosition(pos: string): Operator[] {
    const list: Operator[] = [];
    for (const group of this.gateGroups) {
      for (const g of group.gates) {
        const op = this.cell(pos, g.gate);
        if (op) list.push(op);
      }
    }
    return list;
  }

  public opsOfGroupInPosition(pos: string, group: GateGroup): Operator[] {
    const list: Operator[] = [];
    for (const g of group.gates) {
      const op = this.cell(pos, g.gate);
      if (op) list.push(op);
    }
    return list;
  }

  public opsOfSwapRow(row: SwapRow): Operator[] {
    return row.targets.map(t => t.op);
  }

  public getGateParts(gate: string): { base: string; exp: string } {
    return gateParts(gate);
  }

  public get selectedCount(): number {
    return this.operators ? this.operators.filter(o => o.selected).length : 0;
  }

  public get totalCount(): number {
    return this.operators ? this.operators.length : 0;
  }

  public selectedInPos(pos: string): number {
    return this.opsOfPosition(pos).filter(o => o.selected).length;
  }

  public isAllSelected(ops: Operator[]): boolean {
    return ops.length > 0 && ops.every(o => o.selected);
  }
}
