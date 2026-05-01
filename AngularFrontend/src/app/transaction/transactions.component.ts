import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LucideAngularModule, Search } from 'lucide-angular';
import { ApiService } from '../api.service';
import { Transaction } from '../model/model';

@Component({
  selector: 'app-transactions',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, LucideAngularModule],
  templateUrl: './transactions.component.html',
  styleUrl: './transactions.component.css'
})
export class TransactionsComponent implements OnInit {
  transactions: Transaction[] = [];
  search = '';

  readonly Search = Search;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getTransactions().subscribe(res => this.transactions = res);
  }

  get filtered() {
    return this.transactions.filter(t => 
      t.merchant.toLowerCase().includes(this.search.toLowerCase()) || 
      t.id.toLowerCase().includes(this.search.toLowerCase())
    );
  }

  formatAmount(amt: number) {
    return Math.abs(amt).toLocaleString();
  }
}
