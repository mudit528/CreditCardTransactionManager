import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LucideAngularModule, CreditCard, User, Mail, Lock } from 'lucide-angular';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, LucideAngularModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  @Output() register = new EventEmitter<{ name: string, email: string, pass: string }>();
  @Output() switchToLogin = new EventEmitter<void>();

  name = '';
  email = '';
  password = '';

  readonly CreditCard = CreditCard;
  readonly User = User;
  readonly Mail = Mail;
  readonly Lock = Lock;

  handleSubmit() {
    this.register.emit({ name: this.name, email: this.email, pass: this.password });
  }
}
