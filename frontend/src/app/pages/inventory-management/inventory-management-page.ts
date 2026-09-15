import { DOCUMENT, NgClass } from '@angular/common';
import { Component, Inject, OnDestroy, ViewChild, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
  InventoryIngredientDialogComponent,
  NewInventoryIngredient,
} from '../../components/inventory-ingredient-dialog/inventory-ingredient-dialog.component';
import { InventoryAlertsCardComponent } from '../../components/inventory-alerts-card/inventory-alerts-card.component';
import { InventoryHeaderComponent } from '../../components/inventory-header/inventory-header.component';
import { InventoryStockEntryCardComponent } from '../../components/inventory-stock-entry-card/inventory-stock-entry-card.component';
import { InventoryTableComponent } from '../../components/inventory-table/inventory-table.component';
import { InventoryWeeklyReportCardComponent } from '../../components/inventory-weekly-report-card/inventory-weekly-report-card.component';
import { LayoutSidebarComponent } from '../../components/layout-sidebar/layout-sidebar.component';
import { LayoutTopbarComponent } from '../../components/layout-topbar/layout-topbar.component';

@Component({
  selector: 'app-inventory-management-page',
  standalone: true,
  imports: [
    NgClass,
    LayoutSidebarComponent,
    LayoutTopbarComponent,
    InventoryHeaderComponent,
    InventoryTableComponent,
    InventoryStockEntryCardComponent,
    InventoryAlertsCardComponent,
    InventoryWeeklyReportCardComponent,
  ],
  templateUrl: './inventory-management-page.html',
  styleUrl: './inventory-management-page.scss',
})
export class InventoryManagementPage implements OnDestroy {
  private readonly dialog = inject(MatDialog);
  @ViewChild(InventoryTableComponent) private readonly inventoryTable!: InventoryTableComponent;

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

  openAddIngredientDialog(): void {
    this.dialog
      .open(InventoryIngredientDialogComponent, {
        width: 'min(100vw - 32px, 32rem)',
        autoFocus: false,
      })
      .afterClosed()
      .subscribe((ingredient: NewInventoryIngredient | undefined) => {
        if (ingredient) {
          this.inventoryTable.createIngredient(ingredient);
        }
      });
  }

  onStockEntrySaved(ingredient: NewInventoryIngredient): void {
    this.inventoryTable.createIngredient(ingredient);
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
