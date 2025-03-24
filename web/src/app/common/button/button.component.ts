import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [CommonModule],
  templateUrl: './button.component.html',
})
export class ButtonComponent {
  @Input() label: string = 'Click me';  // Título del botón
  @Input() sty: string = 'bg-secondary';  // Título del botón
  @Output() buttonClicked = new EventEmitter<void>();

  onClick() {
    this.buttonClicked.emit(); 
  }
}
