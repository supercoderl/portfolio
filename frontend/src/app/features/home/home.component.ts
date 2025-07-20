import { Component } from '@angular/core';
import { WelcomeComponent } from './welcome/welcome.component';
import { CategoryComponent } from "./category/category.component";
import { AboutComponent } from "./about/about.component";
import { ServiceComponent } from "./service/service.component";
import { StudyComponent } from "./study/study.component";
import { ExperienceComponent } from "./experience/experience.component";
import { BlogComponent } from "./blog/blog.component";
import { ContactComponent } from "./contact/contact.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    WelcomeComponent,
    CategoryComponent,
    AboutComponent,
    ServiceComponent,
    StudyComponent,
    ExperienceComponent,
    BlogComponent,
    ContactComponent
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
