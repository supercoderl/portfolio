import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { SharedModule } from '../../shared.module';
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    SidebarComponent,
    SharedModule,
    FooterComponent
],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

}
