import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { OperatorFamily, Operator } from '../../model/OperatorFamily';
import { parseOperator, FAMILY_INTROS } from '../../model/operator-labels';

@Component({
  selector: 'app-operator-info-modal',
  templateUrl: './operator-info-modal.component.html',
  styleUrls: ['./operator-info-modal.component.css']
})
export class OperatorInfoModalComponent {
  @Input() family: OperatorFamily | null = null;
  @Output() closed = new EventEmitter<void>();

  get operators(): Operator[] {
    return this.family ? this.family.operators.filter(op => op.enabled) : [];
  }

  get intro(): string {
    return this.family && this.family.name ? FAMILY_INTROS[this.family.name] || '' : '';
  }

  public accentFor(op: Operator): string {
    const parsed = parseOperator(op.name || '');
    switch (parsed.kind) {
      case 'noise':
        return 'kind-noise';
      case 'addGate':
        return 'kind-add';
      case 'swap':
        return 'kind-swap';
      default:
        return 'kind-other';
    }
  }

  public close(): void {
    this.closed.emit();
  }

  @HostListener('document:keydown.escape')
  public handleEscape(): void {
    this.close();
  }
}
