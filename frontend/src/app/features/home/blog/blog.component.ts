import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from "../../../shared/components/button/button.component";
import { Blog } from '../../../shared/dto';
import { BlogService } from '../../../core/http/services/blog.service';
import { SharedModule } from '../../../shared/shared.module';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [
    ButtonComponent,
    SharedModule
  ],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss'
})
export class BlogComponent implements OnInit {
  blogs: Blog[] = [];

  constructor(private blogSrv: BlogService) { }

  ngOnInit(): void {
    this.onLoad();
  }

  onLoad = () => {
    this.blogSrv.fetchList$({ page: 1, limit: 10 }).subscribe({
      next: (res) => {
        if (res.total > 0) {
          this.blogs = res.data;
        }
      },
      error: (err) => {
        console.log("Error", err);
      }
    })
  }
}
