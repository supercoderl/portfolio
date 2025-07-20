import { Component } from '@angular/core';
import { ButtonComponent } from "../../../shared/components/button/button.component";
import { SharedModule } from '../../../shared/shared.module';

@Component({
  selector: 'app-service',
  standalone: true,
  imports: [
    ButtonComponent,
    SharedModule
  ],
  templateUrl: './service.component.html',
  styleUrl: './service.component.scss'
})
export class ServiceComponent {
  expandedIndex: number = 0;

  toggleCollapse(index: number) {
    this.expandedIndex = index;
  }

  services = Array.from({ length: 4 });
}
