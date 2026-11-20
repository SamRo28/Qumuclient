import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Mutant } from '../model/Mutant';
import { ManagerService } from '../services/manager.service';
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

  constructor(public manager: ManagerService, private sanitizer: DomSanitizer) { } ngOnInit(): void {
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
    if (this.selectedMutant?.circuit?.qCodes?.[0]?.code && this.manager.selectedProject?.qProgram.qCodes?.[0]?.code) {
      const originalCode = this.manager.selectedProject.qProgram.qCodes[0].code;
      const mutantCode = this.selectedMutant.circuit.qCodes[0].code;

      this.highlightedMutantCode = this.sanitizer.bypassSecurityTrustHtml(
        this.highlightDifferences(originalCode!, mutantCode!)
      );
    } else {
      const fallbackCode = this.selectedMutant?.circuit?.qCodes?.[0]?.code;
      this.highlightedMutantCode = fallbackCode || '';
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
        // Línea completa diferente - resaltar
        result += `<span class="diff-highlight">${this.escapeHtml(mutantLine)}</span>`;
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
    const code = this.manager.selectedProject?.qProgram.qCodes?.[0]?.code;
    return code || '';
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
