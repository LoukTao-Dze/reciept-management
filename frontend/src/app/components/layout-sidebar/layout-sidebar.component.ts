import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-layout-sidebar',
  standalone: true,
  imports: [NgClass],
  templateUrl: './layout-sidebar.component.html',
  styleUrl: './layout-sidebar.component.scss',
})
export class LayoutSidebarComponent {
  @Input() mobileOpen = false;
  @Output() closeClick = new EventEmitter<void>();
}
