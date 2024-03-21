import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css'],
  imports: [CommonModule, FormsModule],
  standalone: true,
})
export class ReportsComponent {
  reports: any[] = [];

  constructor(private http: HttpClient, private router: Router) {
    this.fetchReports();
  }

  fetchReports() {
    this.http.get<any[]>('https://api.spaceflightnewsapi.net/v3/reports')
      .subscribe(data => this.reports = data);
  }
}
