import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LucideAngularModule, CreditCard, Trash2 } from 'lucide-angular';
import { Card, CreateCardInput, User } from '../../model/model';
import { CardFormComponent } from '../card-form/card-form.component';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [CommonModule, RouterModule, LucideAngularModule, CardFormComponent],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent implements OnInit {
  cards: Card[] = [];
  isFormOpen = false;
  user: User | null = null;

  readonly CreditCard = CreditCard;
  readonly Trash2 = Trash2;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    const saved = localStorage.getItem('user');
    if (saved) this.user = JSON.parse(saved);
    this.refresh();
  }

  refresh() {
    this.apiService.getCards().subscribe(res => this.cards = res);
  }

  issueCard(input: CreateCardInput) {
    this.apiService.createCard(input).subscribe(() => {
      this.refresh();
      this.isFormOpen = false;
    });
  }

  removeCard(id: string) {
    if (confirm('Delete this card?')) {
      this.apiService.deleteCard(id).subscribe(() => this.refresh());
    }
  }

  openForm() {
    this.isFormOpen = true;
  }

  closeForm() {
    this.isFormOpen = false;
  }
}
