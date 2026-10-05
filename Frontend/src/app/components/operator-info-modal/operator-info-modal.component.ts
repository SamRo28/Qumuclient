import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  OnInit,
  AfterViewInit,
  OnDestroy,
  Output,
  ViewChild
} from '@angular/core';
import { OperatorFamily, Operator } from '../../model/OperatorFamily';
import { parseOperator, FAMILY_INTROS } from '../../model/operator-labels';

@Component({
  selector: 'app-operator-info-modal',
  templateUrl: './operator-info-modal.component.html',
  styleUrls: ['./operator-info-modal.component.css']
})
export class OperatorInfoModalComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() family: OperatorFamily | null = null;
  @Output() closed = new EventEmitter<void>();

  @ViewChild('windowEl', { static: true }) windowEl!: ElementRef<HTMLElement>;

  width = 480;
  height = 560;
  minWidth = 320;
  minHeight = 280;
  top = 100;
  left = 100;

  isDragging = false;
  isResizing = false;
  dragStartX = 0;
  dragStartY = 0;
  initialLeft = 0;
  initialTop = 0;
  resizeStartX = 0;
  resizeStartY = 0;
  initialWidth = 0;
  initialHeight = 0;

  ngOnInit(): void {
    this.width = Math.min(480, window.innerWidth - 32);
    this.height = Math.min(560, window.innerHeight - 80);
    this.left = Math.max(16, window.innerWidth / 2 - this.width / 2);
    this.top = Math.max(16, window.innerHeight / 2 - this.height / 2);
  }

  // Se mueve a body para que position:fixed no quede atrapado por contenedores con transform/perspective, como las pestañas de circuits-configuration.
  ngAfterViewInit(): void {
    if (this.windowEl && this.windowEl.nativeElement) {
      document.body.appendChild(this.windowEl.nativeElement);
    }
  }

  ngOnDestroy(): void {
    if (this.windowEl && this.windowEl.nativeElement) {
      this.windowEl.nativeElement.remove();
    }
  }

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

  // --- Dragging Logic ---
  startDragging(event: MouseEvent): void {
    if (event.button !== 0) return;
    if ((event.target as HTMLElement).closest('button')) return;

    this.isDragging = true;
    this.dragStartX = event.clientX;
    this.dragStartY = event.clientY;
    this.initialLeft = this.left;
    this.initialTop = this.top;
    event.preventDefault();
  }

  // --- Resizing Logic ---
  startResizing(event: MouseEvent): void {
    this.isResizing = true;
    this.resizeStartX = event.clientX;
    this.resizeStartY = event.clientY;
    this.initialWidth = this.width;
    this.initialHeight = this.height;
    event.preventDefault();
    event.stopPropagation();
  }

  @HostListener('window:mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    if (this.isDragging) {
      const dx = event.clientX - this.dragStartX;
      const dy = event.clientY - this.dragStartY;
      const rawLeft = this.initialLeft + dx;
      const rawTop = this.initialTop + dy;

      const minLeft = -(this.width - 80);
      const maxLeft = window.innerWidth - 80;
      const minTop = 0;
      const maxTop = window.innerHeight - 48;

      this.left = Math.min(Math.max(rawLeft, minLeft), maxLeft);
      this.top = Math.min(Math.max(rawTop, minTop), maxTop);
    } else if (this.isResizing) {
      const dx = event.clientX - this.resizeStartX;
      const dy = event.clientY - this.resizeStartY;

      const newWidth = this.initialWidth + dx;
      const newHeight = this.initialHeight + dy;

      if (newWidth >= this.minWidth) this.width = newWidth;
      if (newHeight >= this.minHeight) this.height = newHeight;
    }
  }

  @HostListener('window:mouseup')
  stopInteraction(): void {
    this.isDragging = false;
    this.isResizing = false;
  }

  @HostListener('window:resize')
  onWindowResize(): void {
    this.width = Math.min(this.width, window.innerWidth - 32);
    this.height = Math.min(this.height, window.innerHeight - 80);
    this.left = Math.min(Math.max(this.left, -(this.width - 80)), window.innerWidth - 80);
    this.top = Math.min(Math.max(this.top, 0), window.innerHeight - 48);
  }

  @HostListener('document:keydown.escape')
  public handleEscape(): void {
    this.close();
  }
}
