import { Component, Input, Output, EventEmitter } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-quick-action-card',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  template: `
    <button
      (click)="action.emit()"
      class="bg-white border border-gray-100 rounded-xl p-8 flex flex-col items-center text-center group transition-all hover:border-blue-200 hover:shadow-md active:scale-95"
    >
      <div class="bg-gray-50 p-4 rounded-xl group-hover:bg-blue-50 transition-colors mb-4">
        <lucide-icon [name]="icon" size="32" class="text-gray-700 group-hover:text-blue-600 transition-colors"></lucide-icon>
      </div>
      <h3 class="text-lg font-bold text-gray-900 mb-1">{{title}}</h3>
      <p class="text-sm text-gray-500">{{description}}</p>
    </button>
  `
})
export class QuickActionCardComponent {
  @Input() icon!: any;
  @Input() title!: string;
  @Input() description!: string;
  @Output() action = new EventEmitter<void>();
}
