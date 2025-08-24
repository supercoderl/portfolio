import { Component } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-privacy',
  standalone: true,
  imports: [
    SharedModule
  ],
  templateUrl: './privacy.component.html',
})
export class PrivacyComponent {

}
