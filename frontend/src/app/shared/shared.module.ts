import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from './components/button/button.component';
import { HttpClientModule } from '@angular/common/http';

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
    ButtonComponent,
    HttpClientModule
  ]
})
export class SharedModule { }
