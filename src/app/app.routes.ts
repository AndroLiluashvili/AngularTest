// Example app.routes.ts content
import { Routes } from '@angular/router';
import { ArticlesComponent } from '../app/components/articles/articles.component';
import { BlogsComponent } from '../app/components/blogs/blogs.component';
import { ReportsComponent } from '../app/components/reports/reports.component';

export const appRoutes: Routes = [
  { path: 'articles', component: ArticlesComponent, title: 'Articles' },
  { path: 'blogs', component: BlogsComponent, title: 'Blogs' },
  { path: 'reports', component: ReportsComponent, title: 'Reports' },
  { path: '', redirectTo: '/articles', pathMatch: 'full' }
];
