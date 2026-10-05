import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ConvertedCircuit, ImportFormat, ImportLimits } from '../model/ImportModels';
import { ProjectImportService } from '../services/project-import.service';
import { acceptAttrFor, readCircuitFile } from '../utils/import-file.utils';

/**
 * Panel del editor para importar un circuito escrito en otro lenguaje.
 * Primero se elige el lenguaje; después se sube un fichero o se pega el código.
 * Solo se envía el contenido a reper, que lo valida y lo convierte a Quirk.
 */
@Component({
  selector: 'app-circuit-import',
  templateUrl: './circuit-import.component.html',
  styleUrls: ['./circuit-import.component.css']
})
export class CircuitImportComponent implements OnInit {
  @Output() imported = new EventEmitter<ConvertedCircuit>();
  @Output() cancelled = new EventEmitter<void>();

  formats: ImportFormat[] = [];
  limits: ImportLimits = { maxFiles: 20, maxFileBytes: 524288, maxTotalBytes: 5242880, maxQubits: 16 };
  selectedFormatId: string = '';
  mode: 'file' | 'paste' = 'file';

  selectedFile: File | null = null;
  pastedCode: string = '';

  loadingFormats: boolean = true;
  converting: boolean = false;
  error: string | null = null;

  constructor(private importService: ProjectImportService) { }

  ngOnInit(): void {
    this.importService.getFormats().subscribe({
      next: resp => {
        this.formats = resp.formats || [];
        if (resp.limits) {
          this.limits = resp.limits;
        }
        this.loadingFormats = false;
      },
      error: err => {
        this.error = err.message || 'Failed to load supported formats';
        this.loadingFormats = false;
      }
    });
  }

  get selectedFormat(): ImportFormat | undefined {
    return this.formats.find(f => f.id === this.selectedFormatId);
  }

  get acceptAttr(): string {
    return this.selectedFormat ? acceptAttrFor(this.selectedFormat) : '';
  }

  get canConvert(): boolean {
    if (!this.selectedFormat || this.converting) {
      return false;
    }
    return this.mode === 'file' ? !!this.selectedFile : this.pastedCode.trim() !== '';
  }

  onFormatChange(): void {
    // Un fichero elegido para otro lenguaje deja de valer
    this.selectedFile = null;
    this.error = null;
  }

  setMode(mode: 'file' | 'paste'): void {
    this.mode = mode;
    this.error = null;
  }

  onFileChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.selectedFile = input.files && input.files.length > 0 ? input.files[0] : null;
    this.error = null;
  }

  async convert(): Promise<void> {
    const format = this.selectedFormat;
    if (!format || !this.canConvert) {
      return;
    }
    this.error = null;

    let fileName: string | null = null;
    let code: string;
    if (this.mode === 'file') {
      const res = await readCircuitFile(this.selectedFile!, format, this.limits);
      if (res.error || !res.item) {
        this.error = res.error || 'The file could not be read';
        return;
      }
      fileName = res.item.fileName;
      code = res.item.code;
    } else {
      code = this.pastedCode;
      if (new TextEncoder().encode(code).length > this.limits.maxFileBytes) {
        this.error = 'Code exceeds 512 KB';
        return;
      }
    }

    this.converting = true;
    this.importService.convertOnly(null, { fileName, format: format.id, code }).subscribe({
      next: circuit => {
        this.converting = false;
        this.imported.emit(circuit);
      },
      error: err => {
        this.converting = false;
        this.error = err.message || 'The circuit could not be converted';
      }
    });
  }

  cancel(): void {
    this.cancelled.emit();
  }
}
