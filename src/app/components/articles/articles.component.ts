import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css'],
  imports: [FormsModule, CommonModule], 
  standalone: true,
})
export class ArticlesComponent {
  articles: any[] = [];
  articleCount: number = 10; 

  constructor(
    private http: HttpClient, 
    private route: ActivatedRoute, 
    private router: Router
  ) {
   
    this.route.queryParams.subscribe(params => {
      const count = params['count'];
      if (count) {
        this.articleCount = parseInt(count, 10); 
        this.fetchArticles(this.articleCount); 
      } else {
        this.fetchArticles(this.articleCount); 
      }
    });
  }

  fetchArticles(count: number = this.articleCount) {
    this.http.get<any[]>(`https://api.spaceflightnewsapi.net/v3/articles?_limit=${count}`)
      .subscribe(data => this.articles = data);
  }

 
  updateArticleCount(count: number) {
    this.articleCount = count;
   
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { count: count },
      queryParamsHandling: 'merge', 
    });
  }
}
