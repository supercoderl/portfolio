import { Component, HostListener, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';

import { SharedModule } from './shared/shared.module';
import AOS from 'aos';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [
    RouterOutlet,
    SharedModule,
  ]
})
export class AppComponent implements OnInit {
  title = 'portfolio';
  isScrolling: boolean = false;

  constructor(private router: Router, @Inject(PLATFORM_ID) private platformId: Object) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const tree = this.router.parseUrl(this.router.url);
        if (tree.fragment) {
          const element = document.querySelector("#" + tree.fragment);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }
    });
  }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      AOS.init();
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Lấy vị trí cuộn hiện tại
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    // Đặt điều kiện để thay đổi class
    if (scrollPosition > 100) { // Ví dụ: nếu cuộn quá 100px
      this.isScrolling = true;
    } else {
      this.isScrolling = false;
    }
  }
}
