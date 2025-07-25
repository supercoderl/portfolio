import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from "../../../shared/components/button/button.component";
import { SharedModule } from '../../../shared/shared.module';
import { Service } from '../../../shared/dto';
import { ServiceService } from '../../../core/http/services/service.service';

@Component({
  selector: 'app-service',
  standalone: true,
  imports: [
    ButtonComponent,
    SharedModule
  ],
  templateUrl: './service.component.html',
  styleUrl: './service.component.scss'
})
export class ServiceComponent implements OnInit {
  expandedIndex: number = 0;

  toggleCollapse(index: number) {
    this.expandedIndex = index;
  }

  services: Service[] = [];
  
    constructor(private serviceSrv: ServiceService) { }
  
    ngOnInit(): void {
      this.onLoad();
    }
  
    onLoad = async () => {
      await this.serviceSrv.fetchList$({ page: 1, limit: 10 }).subscribe({
        next: (res) => {
          if (res.total > 0) {
            this.services = res.data;
          }
        },
        error: (err) => {
          console.log("Error", err);
        }
      })
    }
}
