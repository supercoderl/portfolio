import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from "../../../shared/components/button/button.component";
import { SharedModule } from '../../../shared/shared.module';
import { ExperienceService } from '../../../core/http/services/experience.service';
import { Experience } from '../../../shared/dto';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [
    ButtonComponent,
    SharedModule
  ],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent implements OnInit {
  experiences: Experience[] = [];

  constructor(private expSrv: ExperienceService) { }

  ngOnInit(): void {
    this.onLoad();
  }

  onLoad = async () => {
    await this.expSrv.fetchList$({ page: 1, limit: 10 }).subscribe({
      next: (res) => {
        if (res.total > 0) {
          this.experiences = res.data;
        }
      },
      error: (err) => {
        console.log("Error", err);
      }
    })
  }
}
