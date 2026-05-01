import { Component, Input } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-stats-card',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  template: `
    <div class="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex items-center gap-6">
      <div [class]="color + ' p-4 rounded-xl text-white'">
        <lucide-icon [name]="icon" size="28"></lucide-icon>
      </div>
      <div>
        <div class="text-4xl font-bold text-gray-900">{{value}}</div>
        <div class="text-gray-500 text-sm font-medium">{{label}}</div>
      </div>
    </div>
  `
})
export class StatsCardComponent {
  @Input() icon!: any;
  @Input() label!: string;
  @Input() value!: number;
  @Input() color!: string;
}
