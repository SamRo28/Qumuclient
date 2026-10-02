import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Operator } from '../../model/OperatorFamily';
import { parseOperator } from '../../model/operator-labels';

@Component({
  selector: 'app-operator-grid',
  templateUrl: './operator-grid.component.html',
  styleUrls: ['./operator-grid.component.css']
})
export class OperatorGridComponent implements OnChanges {
  @Input() operators: Operator[] = [];

  public mode: 'list' | 'table' = 'list';
  public tableType: 'addGate' | 'swap' = 'addGate';
  public rowHeaderTitle: string = '';
  public rows: string[] = [];
  public columns: string[] = [];
  private cellMap: Map<string, Operator> = new Map();

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['operators']) {
      this.recalculateGrid();
    }
  }

  private recalculateGrid(): void {
    this.cellMap.clear();
    this.rows = [];
    this.columns = [];

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
      this.mode = 'table';
      this.tableType = 'addGate';
      this.rowHeaderTitle = 'Gate';
      this.columns = ['Start', 'End', 'Random'];

      for (const item of parsedList) {
        const row = item.parsed.gate || '';
        const col = item.parsed.position || '';
        if (row && !this.rows.includes(row)) {
          this.rows.push(row);
        }
        this.cellMap.set(`${row}__${col}`, item.op);
      }
    } else if (allSwap) {
      this.mode = 'table';
      this.tableType = 'swap';
      this.rowHeaderTitle = 'Original gate';

      for (const item of parsedList) {
        const row = item.parsed.from || '';
        const col = item.parsed.to || '';
        if (row && !this.rows.includes(row)) {
          this.rows.push(row);
        }
        if (col && !this.columns.includes(col)) {
          this.columns.push(col);
        }
        this.cellMap.set(`${row}__${col}`, item.op);
      }
    } else {
      this.mode = 'list';
    }
  }

  public getCell(row: string, col: string): Operator | undefined {
    return this.cellMap.get(`${row}__${col}`);
  }

  public toggleColumn(col: string): void {
    const cells: Operator[] = [];
    for (const row of this.rows) {
      const cell = this.getCell(row, col);
      if (cell) {
        cells.push(cell);
      }
    }
    if (cells.length === 0) return;
    const allSelected = cells.every(c => c.selected);
    cells.forEach(c => c.selected = !allSelected);
  }

  public toggleRow(row: string): void {
    const cells: Operator[] = [];
    for (const col of this.columns) {
      const cell = this.getCell(row, col);
      if (cell) {
        cells.push(cell);
      }
    }
    if (cells.length === 0) return;
    const allSelected = cells.every(c => c.selected);
    cells.forEach(c => c.selected = !allSelected);
  }
}
