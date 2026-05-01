import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TransactionsComponent } from './transaction/transactions.component';
import { CardsComponent } from './credit-card/card-list/cards.component';

export const baseUrl = 'http://localhost:8080';

export const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'cards', component: CardsComponent },
  { path: 'transactions', component: TransactionsComponent },
  { path: '**', redirectTo: '' }
];
