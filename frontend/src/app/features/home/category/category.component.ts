import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [
    SharedModule
  ],
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss'
})
export class CategoryComponent {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    autoplay: true,
    autoplayTimeout: 2000, // 3 seconds
    autoplaySpeed: 1500, // transition speed
    autoplayHoverPause: false,
    smartSpeed: 150, // This creates the 150ms pause effect
    fluidSpeed: true,
    responsive: {
      0: {
        items: 2
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
    },
    nav: false
  };

  arr = Array.from({ length: 10 })
}
