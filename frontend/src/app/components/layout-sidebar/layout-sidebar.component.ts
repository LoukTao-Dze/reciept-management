import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-layout-sidebar',
  standalone: true,
  imports: [NgClass, RouterLinkWithHref],
  templateUrl: './layout-sidebar.component.html',
  styleUrl: './layout-sidebar.component.scss',
})
export class LayoutSidebarComponent {
  @Input() mobileOpen = false;
  @Input() activeSection: 'dashboard' | 'inventory' | 'recipes' | 'menu-list' | 'pos' = 'recipes';
  @Output() closeClick = new EventEmitter<void>();

  protected isActive(
    section: 'dashboard' | 'inventory' | 'recipes' | 'menu-list' | 'pos',
  ): boolean {
    return this.activeSection === section;
  }
}
