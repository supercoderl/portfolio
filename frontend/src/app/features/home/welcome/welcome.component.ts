import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { MultiTypewriterComponent } from '../../../shared/components/typewriter/typewriter.component';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [
    SharedModule,
    MultiTypewriterComponent
  ],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.scss'
})
export class WelcomeComponent {
  faChevronDown = faChevronDown;

  openUrl(url: string) {
    window.open(url, '_blank');
  }
}
