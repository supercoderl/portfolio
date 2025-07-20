import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from './components/button/button.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CarouselModule,
    ButtonComponent
  ],
  exports: [
    CommonModule,
    CarouselModule,
    FontAwesomeModule,
    RouterModule,
    ButtonComponent
  ]
})
export class SharedModule { }
