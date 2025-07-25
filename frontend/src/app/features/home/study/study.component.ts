import { Component, ViewChild } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { SharedModule } from '../../../shared/shared.module';
import { ButtonComponent } from '../../../shared/components/button/button.component';
import { Project } from '../../../shared/dto';
import { ProjectService } from '../../../core/http/services/project.service';

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

  projects: Project[] = [];

  constructor(private projectSrv: ProjectService) { }

  ngOnInit(): void {
    this.onLoad();
  }

  onLoad = async () => {
    await this.projectSrv.fetchList$({ page: 1, limit: 10 }).subscribe({
      next: (res) => {
        if (res.total > 0) {
          this.projects = res.data;
        }
      },
      error: (err) => {
        console.log("Error", err);
      }
    })
  }
}
