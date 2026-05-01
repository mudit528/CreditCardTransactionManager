import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LucideAngularModule, CreditCard, Lock, Mail } from 'lucide-angular';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, LucideAngularModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  @Output() login = new EventEmitter<{ email: string, pass: string }>();
  @Output() switchToRegister = new EventEmitter<void>();

  email = 'admin@example.com';
  password = 'password123';

  readonly CreditCard = CreditCard;
  readonly Lock = Lock;
  readonly Mail = Mail;

  handleSubmit() {
    this.login.emit({ email: this.email, pass: this.password });
  }
}
