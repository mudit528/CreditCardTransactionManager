import { Component } from '@angular/core';
import { LucideAngularModule, CreditCard, Mail, HelpCircle, Shield, Facebook, Twitter, Instagram, Youtube } from 'lucide-angular';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [LucideAngularModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  readonly CreditCard = CreditCard;
  readonly Mail = Mail;
  readonly HelpCircle = HelpCircle;
  readonly Shield = Shield;
  readonly Facebook = Facebook;
  readonly Twitter = Twitter;
  readonly Instagram = Instagram;
  readonly Youtube = Youtube;
}
