import { Component } from '@angular/core';
import { ButtonComponent } from "../../../shared/components/button/button.component";
import { SharedModule } from '../../../shared/shared.module';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [
    ButtonComponent,
    SharedModule
  ],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
  experiences = Array.from({ length: 4 });
}
