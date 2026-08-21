import { CommonModule, DOCUMENT } from '@angular/common';
import { Component, Inject, OnDestroy } from '@angular/core';
import { LayoutSidebarComponent } from '../../components/layout-sidebar/layout-sidebar.component';
import { LayoutTopbarComponent } from '../../components/layout-topbar/layout-topbar.component';
import { MenuListShowcaseComponent } from '../../components/menu-list-showcase/menu-list-showcase.component';

@Component({
  selector: 'app-menu-list-page',
  standalone: true,
  imports: [CommonModule, LayoutSidebarComponent, LayoutTopbarComponent],
  templateUrl: './menu-list-page.html',
  styleUrl: './menu-list-page.scss',
})
export class MenuListPage implements OnDestroy {
  protected isSidebarOpen = false;
  protected readonly menuListShowcaseComponent = MenuListShowcaseComponent;

  constructor(@Inject(DOCUMENT) private readonly document: Document) {
    this.isSidebarOpen = this.isDesktopViewport();
  }

  protected toggleSidebar(): void {
    this.isSidebarOpen = !this.isSidebarOpen;
    this.updateBodyScrollLock();
  }

  protected closeSidebar(): void {
    this.isSidebarOpen = false;
    this.updateBodyScrollLock();
  }

  ngOnDestroy(): void {
    this.document.body.style.overflow = '';
  }

  private updateBodyScrollLock(): void {
    const isMobileViewport =
      typeof window !== 'undefined' && window.matchMedia('(max-width: 1023px)').matches;
    this.document.body.style.overflow = this.isSidebarOpen && isMobileViewport ? 'hidden' : '';
  }

  private isDesktopViewport(): boolean {
    return typeof window !== 'undefined' && window.matchMedia('(min-width: 1024px)').matches;
  }
}
