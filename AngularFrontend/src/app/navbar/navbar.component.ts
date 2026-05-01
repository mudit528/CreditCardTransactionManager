import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { User } from '../model/model';
import { LucideAngularModule, CreditCard, LayoutDashboard, History, LogOut } from 'lucide-angular';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule, LucideAngularModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  @Input() user!: User;
  @Output() logout = new EventEmitter<void>();

  readonly CreditCard = CreditCard;
  readonly LayoutDashboard = LayoutDashboard;
  readonly History = History;
  readonly LogOut = LogOut;
}
