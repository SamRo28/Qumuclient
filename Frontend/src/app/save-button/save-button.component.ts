import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-save-button',
  templateUrl: './save-button.component.html',
  styleUrls: ['./save-button.component.css']
})
export class SaveButtonComponent {
  @Output() saveClick = new EventEmitter<void>();

  onSave(): void {
    this.saveClick.emit();
  }
}
