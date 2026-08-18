import { DOCUMENT, NgClass } from '@angular/common';
import { Component, Inject, OnDestroy } from '@angular/core';
import { LayoutSidebarComponent } from '../../components/layout-sidebar/layout-sidebar.component';
import { LayoutTopbarComponent } from '../../components/layout-topbar/layout-topbar.component';
import { MenuListComponent } from '../../components/menu-list/menu-list.component';
import { RecipeBomPanelComponent } from '../../components/recipe-bom-panel/recipe-bom-panel.component';

@Component({
  selector: 'app-recipes-dashboard-page',
  standalone: true,
  imports: [
    NgClass,
    LayoutSidebarComponent,
    LayoutTopbarComponent,
    MenuListComponent,
    RecipeBomPanelComponent,
  ],
  templateUrl: './recipes-dashboard-page.html',
  styleUrl: './recipes-dashboard-page.scss',
})
export class RecipesDashboardPage implements OnDestroy {
  isSidebarOpen = false;

  constructor(@Inject(DOCUMENT) private readonly document: Document) {
    this.isSidebarOpen = this.isDesktopViewport();
  }

  toggleSidebar(): void {
    this.isSidebarOpen = !this.isSidebarOpen;
    this.updateBodyScrollLock();
  }

  closeSidebar(): void {
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
