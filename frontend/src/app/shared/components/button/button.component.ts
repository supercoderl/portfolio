import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
  encapsulation: ViewEncapsulation.Emulated
})
export class ButtonComponent {
  @Input() href = '#';
  @Input() className = '';
  @Input() target = '_self';

  @Output() clicked = new EventEmitter<Event>();


  handleClick(event: Event) {
    if(this.href === '#') {
      event.preventDefault();
    }
    
    this.clicked.emit(event);
  }
}
