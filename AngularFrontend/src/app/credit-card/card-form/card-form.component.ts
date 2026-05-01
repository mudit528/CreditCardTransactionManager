import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LucideAngularModule, X, CreditCard, User, Landmark, ShieldCheck } from 'lucide-angular';
import { CreateCardInput } from '../../model/model';

@Component({
  selector: 'app-card-form',
  standalone: true,
  imports: [CommonModule, FormsModule, LucideAngularModule],
  templateUrl: './card-form.component.html',
  styleUrl: './card-form.component.css'
})
export class CardFormComponent {
  @Input() isOpen = false;
  @Output() close = new EventEmitter<void>();
  @Output() submitForm = new EventEmitter<CreateCardInput>();

  formData: CreateCardInput = {
    cardNumber: '',
    cardHolder: '',
    expiryDate: '',
    cvv: '',
    bankName: '',
    balance: 0
  };

  readonly X = X;
  readonly CreditCardIcon = CreditCard;
  readonly UserIcon = User;
  readonly Landmark = Landmark;
  readonly ShieldCheck = ShieldCheck;

  handleSubmit() {
    this.submitForm.emit({ ...this.formData });
    this.reset();
  }

  reset() {
    this.formData = { cardNumber: '', cardHolder: '', expiryDate: '', cvv: '', bankName: '', balance: 0 };
    this.close.emit();
  }
}
