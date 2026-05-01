import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Card, Transaction, DashboardStats, CreateCardInput, CreateTransactionInput, User } from './model/model';
import { baseUrl } from './app-routing.module';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getDashboardStats(): Observable<DashboardStats> {
    return this.http.get<DashboardStats>(`${baseUrl}/api/dashboard/stats`);
  }

  getCards(): Observable<Card[]> {
    return this.http.get<Card[]>(`${baseUrl}/api/cards`);
  }

  createCard(card: CreateCardInput): Observable<Card> {
    return this.http.post<Card>(`${baseUrl}/api/cards`, card);
  }

  deleteCard(id: string): Observable<void> {
    return this.http.delete<void>(`${baseUrl}/api/cards/${id}`);
  }

  getTransactions(): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(`${baseUrl}/api/transactions`);
  }

  login(email: string, password: string): Observable<{ user: User }> {
    return this.http.post<{ user: User }>(`${baseUrl}/api/auth/login`, { email, password });
  }

  register(name: string, email: string, password?: string): Observable<{ user: User }> {
    return this.http.post<{ user: User }>(`${baseUrl}/api/auth/register`, { name, email, password });
  }

  createTransaction(tx: CreateTransactionInput): Observable<Transaction> {
    return this.http.post<Transaction>(`${baseUrl}/api/transactions`, tx);
  }
}
