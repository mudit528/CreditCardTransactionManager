import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { LucideAngularModule, CreditCard, History, Zap } from 'lucide-angular';
import { StatsCardComponent } from '../shared/stats-card.component';
import { QuickActionCardComponent } from '../shared/quick-action-card.component';
import { DashboardStats, User } from '../model/model';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, LucideAngularModule, StatsCardComponent, QuickActionCardComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  stats: DashboardStats | null = null;
  user: User | null = null;

  readonly CreditCard = CreditCard;
  readonly History = History;
  readonly Zap = Zap;

  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit() {
    const saved = localStorage.getItem('user');
    if (saved) this.user = JSON.parse(saved);
    
    this.apiService.getDashboardStats().subscribe(res => this.stats = res);
  }

  navigate(path: string) {
    this.router.navigate([path]);
  }
}
