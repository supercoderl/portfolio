import { Component, ViewChild } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { SharedModule } from '../../../shared/shared.module';
import { ButtonComponent } from '../../../shared/components/button/button.component';

@Component({
  selector: 'app-study',
  standalone: true,
  imports: [
    SharedModule,
    ButtonComponent
  ],
  templateUrl: './study.component.html',
  styleUrl: './study.component.scss'
})
export class StudyComponent {
  @ViewChild('owlCar', { static: false }) owlCar!: any;
  
  customOptions: OwlOptions = {
    margin: 24,
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    smartSpeed: 150,
    fluidSpeed: true,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      },
      1200: {
        items: 5
      }
    }
  };

  arr = Array.from({ length: 10 })
}
