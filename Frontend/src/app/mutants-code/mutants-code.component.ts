import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Mutant } from '../model/Mutant';
import { ManagerService } from '../manager.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-mutants-code',
  templateUrl: './mutants-code.component.html',
  styleUrls: ['./mutants-code.component.css']
})
export class MutantsCodeComponent implements OnInit, OnDestroy, AfterViewInit {

  selectedMutant: Mutant | null = null;
  private subscription = new Subscription();
  highlightedMutantCode: SafeHtml = '';

  constructor(public manager: ManagerService, private sanitizer: DomSanitizer) { }  ngOnInit(): void {
    this.subscription.add(
      this.manager.selectedMutant$.subscribe(mutant => {
        this.selectedMutant = mutant;
        this.updateHighlightedCode();
      })
    );
  }

  ngAfterViewInit() {
    this.updateHighlightedCode();
  }

  private updateHighlightedCode(): void {
    if (this.selectedMutant?.circuit?.qCode.code && this.manager.selectedProject?.qProgram.qCode.code) {
      const originalCode = Array.isArray(this.manager.selectedProject?.qProgram.qCode.code) 
        ? this.manager.selectedProject.qProgram.qCode.code.join('\n')
        : this.manager.selectedProject.qProgram.qCode.code;
      const mutantCode = Array.isArray(this.selectedMutant.circuit.qCode.code)
        ? this.selectedMutant.circuit.qCode.code.join('\n')
        : this.selectedMutant.circuit.qCode.code;
      this.highlightedMutantCode = this.sanitizer.bypassSecurityTrustHtml(
        this.highlightDifferences(originalCode, mutantCode)
      );
    } else {
      const fallbackCode = this.selectedMutant?.circuit?.qCode.code;
      this.highlightedMutantCode = Array.isArray(fallbackCode) 
        ? fallbackCode.join('\n') 
        : (fallbackCode || '');
    }
  }

  private highlightDifferences(original: string, mutant: string): string {
    const originalLines = original.split('\n');
    const mutantLines = mutant.split('\n');
    const maxLines = Math.max(originalLines.length, mutantLines.length);
    
    let result = '';
    
    for (let i = 0; i < maxLines; i++) {
      const originalLine = originalLines[i] || '';
      const mutantLine = mutantLines[i] || '';
      
      if (originalLine !== mutantLine) {
        // Línea completa diferente - resaltar en amarillo
        result += `<span style="background-color: yellow;">${this.escapeHtml(mutantLine)}</span>`;
      } else {
        // Línea igual
        result += this.escapeHtml(mutantLine);
      }
      
      if (i < maxLines - 1) {
        result += '\n';
      }
    }
    
    return result;
  }

  getOriginalCode(): string {
    const code = this.manager.selectedProject?.qProgram.qCode.code;
    return Array.isArray(code) ? code.join('\n') : (code || '');
  }

  private escapeHtml(text: string): string {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
