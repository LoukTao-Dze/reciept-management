import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { DatePipe } from '@angular/common';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import {
  InventoryIngredientDialogComponent,
  NewInventoryIngredient,
} from '../inventory-ingredient-dialog/inventory-ingredient-dialog.component';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { InventoryItem } from '../../models/inventory-item.model';
import { mockInventoryItems } from '../../shared/mocks/inventory.mock';

@Component({
  selector: 'app-inventory-table',
  standalone: true,
  imports: [DatePipe, MatDialogModule],
  templateUrl: './inventory-table.component.html',
  styleUrl: './inventory-table.component.scss',
})
export class InventoryTableComponent {
  private readonly dialog = inject(MatDialog);
  private readonly changeDetectorRef = inject(ChangeDetectorRef);

  /**
   * this is a temporary solution to display the status text and class based on the amount and alert threshold.
   */
  protected items: InventoryItem[] = mockInventoryItems.map((item) => {
    const isLowStock = +item.amount <= item.alertThreshold;
    return {
      ...item,
      createDate: new Date(item.createDate),
      expiryDate: new Date(item.expiryDate),
      statusText: isLowStock ? 'ใกล้หมด' : 'ปกติ',
      statusClass: isLowStock
        ? 'bg-primary-container/30 text-on-primary-container'
        : 'bg-surface-container-high text-on-surface-variant',
    };
  });

  addItem(ingredient: NewInventoryIngredient): void {
    const isLowStock = ingredient.amount <= ingredient.alertThreshold;
    const createDate = new Date();
    const expiryDate = new Date(`${ingredient.expiryDate}T00:00:00`);

    const newItem: InventoryItem = {
      name: ingredient.name,
      icon: 'inventory_2',
      amount: String(ingredient.amount),
      unit: ingredient.unit,
      totalPrice: ingredient.totalPrice,
      alertThreshold: ingredient.alertThreshold,
      createDate,
      expiryDate,
      statusText: isLowStock ? 'ใกล้หมด' : 'ปกติ',
      statusClass: isLowStock
        ? 'bg-primary-container/30 text-on-primary-container'
        : 'bg-surface-container-high text-on-surface-variant',
    };
    this.items = [newItem, ...this.items];
    this.changeDetectorRef.markForCheck();
  }

  protected editItem(item: InventoryItem): void {
    this.dialog
      .open(InventoryIngredientDialogComponent, {
        width: 'min(100vw - 32px, 32rem)',
        autoFocus: false,
        data: {
          ingredient: {
            name: item.name,
            amount: Number(item.amount),
            unit: item.unit,
            totalPrice: item.totalPrice,
            alertThreshold: item.alertThreshold,
            expiryDate: this.toDateInputValue(item.expiryDate),
          },
        },
      })
      .afterClosed()
      .subscribe((ingredient: NewInventoryIngredient | undefined) => {
        if (ingredient) {
          this.updateItem(item, ingredient);
        }
      });
  }

  protected deleteItem(item: InventoryItem): void {
    this.dialog
      .open(ConfirmDialogComponent, {
        width: 'min(100vw - 32px, 24rem)',
        autoFocus: false,
        data: {
          title: 'ลบวัตถุดิบ',
          message: `ยืนยันการนำ "${item.name}" ออกจากรายการวัตถุดิบใช่หรือไม่?`,
          confirmText: 'ลบ',
          danger: true,
        },
      })
      .afterClosed()
      .subscribe((confirmed) => {
        if (confirmed) {
          this.items = this.items.filter((current) => current !== item);
        }
        this.changeDetectorRef.markForCheck();
      });
  }

  private updateItem(item: InventoryItem, ingredient: NewInventoryIngredient): void {
    const isLowStock = ingredient.amount <= ingredient.alertThreshold;
    const updatedItem: InventoryItem = {
      ...item,
      name: ingredient.name,
      amount: String(ingredient.amount),
      unit: ingredient.unit,
      totalPrice: ingredient.totalPrice,
      alertThreshold: ingredient.alertThreshold,
      expiryDate: new Date(`${ingredient.expiryDate}T00:00:00`),
      statusText: isLowStock ? 'ใกล้หมด' : 'ปกติ',
      statusClass: isLowStock
        ? 'bg-primary-container/30 text-on-primary-container'
        : 'bg-surface-container-high text-on-surface-variant',
    };

    this.items = this.items.map((current) => (current === item ? updatedItem : current));
    this.changeDetectorRef.markForCheck();
  }

  private toDateInputValue(date: Date): string {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }
}
