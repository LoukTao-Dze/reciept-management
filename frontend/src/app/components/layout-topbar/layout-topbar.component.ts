import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-layout-topbar',
  standalone: true,
  templateUrl: './layout-topbar.component.html',
  styleUrl: './layout-topbar.component.scss',
})
export class LayoutTopbarComponent {
  @Input() sidebarOpen = false;
  @Output() menuClick = new EventEmitter<void>();
}
