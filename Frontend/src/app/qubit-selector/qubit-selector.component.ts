import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { formatQubits, parseQubits } from './qubit-selector.utils';

@Component({
  selector: 'app-qubit-selector',
  templateUrl: './qubit-selector.component.html',
  styleUrls: ['./qubit-selector.component.css']
})
export class QubitSelectorComponent implements OnChanges {
  @Input() label = 'Qubits';
  @Input() icon = 'fas fa-arrow-right-to-bracket';
  @Input() qubits = 0;
  @Input() value = '';
  @Output() valueChange = new EventEmitter<string>();

  selection: boolean[] = [];

  ngOnChanges(): void {
    // Evita pisar la selección local si el valor es el que acabamos de emitir
    if (formatQubits(this.selection) !== (this.value || '') || this.selection.length !== this.qubits) {
      this.selection = parseQubits(this.value, this.qubits);
    }
  }

  get indices(): number[] {
    return this.selection.map((_, i) => i);
  }

  toggleAll(): void {
    const all = this.selection.length > 0 && this.selection.every(s => s);
    this.selection = this.selection.map(() => !all);
    this.emit();
  }

  onToggle(i: number, checked: boolean): void {
    this.selection[i] = checked;
    this.emit();
  }

  private emit(): void {
    this.value = formatQubits(this.selection);
    this.valueChange.emit(this.value);
  }
}
