import { Component } from '@angular/core';
import { ButtonComponent } from "../../../shared/components/button/button.component";

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

}
