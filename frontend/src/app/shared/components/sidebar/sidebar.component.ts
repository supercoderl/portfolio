import { Component } from '@angular/core';
import { SharedModule } from '../../shared.module';
import { faFacebookF, faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    SharedModule
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  faFacebook = faFacebookF;
  faTwitter = faTwitter;
  faLinkedin = faLinkedin;
  faGithub = faGithub;
  faMenu = faBars;
  faClose = faClose;

  isOpen = false;

  toggleNav() {
    this.isOpen = !this.isOpen;
  }
}
