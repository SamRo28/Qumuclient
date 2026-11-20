import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { ImportFormat } from '../model/ImportModels';
import { ProjectImportService } from '../services/project-import.service';

/**
 * Selector "Show as" del editor: representa el circuito Quirk actual en otro de
 * los formatos de entrada del conversor (solo lectura). Quirk sigue siendo el
 * único formato editable; esta vista nunca modifica el proyecto.
 */
@Component({
  selector: 'app-circuit-representation',
  templateUrl: './circuit-representation.component.html',
  styleUrls: ['./circuit-representation.component.css']
})
export class CircuitRepresentationComponent implements OnInit, OnChanges {
  @Input() quirk: any;
  @Input() loggedIn: boolean = false;
  @Input() projectName: string = '';
  @Output() modeChange = new EventEmitter<string>();

  formats: ImportFormat[] = [];
  selected: string = 'quirk';

  code: string = '';
  extension: string = '';
  loading: boolean = false;
  error: string | null = null;
  stale: boolean = false;
  copied: boolean = false;

  constructor(private importService: ProjectImportService) { }

  ngOnInit(): void {
    this.importService.getFormats().subscribe({
      next: resp => {
        // IonQ no es formato de salida del conversor: no se puede representar
        this.formats = (resp.formats || []).filter(f => f.representable && f.id !== 'quirk');
      },
      error: () => {
        this.formats = [];
      }
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['quirk'] && !changes['quirk'].firstChange && this.selected !== 'quirk' && this.code) {
      this.stale = true;
    }
  }

  get hasValidQuirk(): boolean {
    return !!this.quirk && Array.isArray(this.quirk.cols) && this.quirk.cols.length > 0;
  }

  get disabled(): boolean {
    return !this.loggedIn || !this.hasValidQuirk;
  }

  get selectedLabel(): string {
    const f = this.formats.find(x => x.id === this.selected);
    return f ? f.label : this.selected;
  }

  select(formatId: string): void {
    if (this.selected === formatId) {
      return;
    }
    this.selected = formatId;
    this.modeChange.emit(formatId);
    this.code = '';
    this.error = null;
    this.stale = false;
    if (formatId !== 'quirk') {
      this.refresh();
    }
  }

  refresh(): void {
    if (this.selected === 'quirk' || this.disabled) {
      return;
    }
    this.loading = true;
    this.error = null;
    const target = this.selected;
    this.importService.represent(null, this.quirk, target).subscribe({
      next: rep => {
        // Si mientras tanto se eligió otro formato, se descarta la respuesta
        if (this.selected !== target) return;
        this.code = rep.code;
        this.extension = rep.extension;
        this.loading = false;
        this.stale = false;
      },
      error: err => {
        if (this.selected !== target) return;
        this.error = err.message || 'The circuit could not be represented in this format';
        this.code = '';
        this.loading = false;
      }
    });
  }

  copy(): void {
    if (!this.code || !navigator.clipboard) {
      return;
    }
    navigator.clipboard.writeText(this.code).then(() => {
      this.copied = true;
      setTimeout(() => this.copied = false, 1500);
    });
  }

  download(): void {
    if (!this.code) {
      return;
    }
    const base = (this.projectName || 'circuit').trim().replace(/[^\p{L}\p{N} ._()-]/gu, '_') || 'circuit';
    const blob = new Blob([this.code], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = base + (this.extension || '.txt');
    a.click();
    URL.revokeObjectURL(url);
  }
}
