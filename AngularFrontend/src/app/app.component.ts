import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { User } from './model/model';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet, 
    NavbarComponent, 
    FooterComponent, 
    LoginComponent, 
    RegisterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  user: User | null = null;
  auth: 'login' | 'register' = 'login';
  ready = false;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    const saved = localStorage.getItem('user');
    if (saved) {
      this.user = JSON.parse(saved);
    }
    this.ready = true;
  }

  onLogin(data: { email: string, pass: string }) {
    this.apiService.login(data.email, data.pass).subscribe({
      next: (res) => {
        this.user = res.user;
        localStorage.setItem('user', JSON.stringify(res.user));
      },
      error: (err) => alert(err.message || 'Login failed')
    });
  }

  onRegister(data: { name: string, email: string, pass: string }) {
    this.apiService.register(data.name, data.email, data.pass).subscribe({
      next: (res) => {
        this.user = res.user;
        localStorage.setItem('user', JSON.stringify(res.user));
      },
      error: (err) => alert(err.message || 'Registration failed')
    });
  }

  logout() {
    this.user = null;
    localStorage.removeItem('user');
    this.auth = 'login';
  }

  setAuth(mode: 'login' | 'register') {
    this.auth = mode;
  }
}

