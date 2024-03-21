import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css'],
  imports: [CommonModule], 
  standalone: true,
})
export class BlogsComponent {
  blogs: any[] = [];

  constructor(private http: HttpClient, private router: Router) {
    this.fetchBlogs();
  }

  fetchBlogs() {
    this.http.get<any[]>('https://api.spaceflightnewsapi.net/v3/blogs')
      .subscribe(data => this.blogs = data);
  }
}
