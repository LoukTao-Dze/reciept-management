import { ChangeDetectorRef, Component, OnInit, inject } from '@angular/core';
import { DatePipe } from '@angular/common';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import {
  InventoryIngredientDialogComponent,
  NewInventoryIngredient,
} from '../inventory-ingredient-dialog/inventory-ingredient-dialog.component';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { InventoryItem } from '../../models/inventory-item.model';
import {
  InventoryIngredient,
  InventoryIngredientsService,
} from '../../services/inventory-ingredients.service';

@Component({
  selector: 'app-inventory-table',
  standalone: true,
  imports: [DatePipe, MatDialogModule],
  templateUrl: './inventory-table.component.html',
  styleUrl: './inventory-table.component.scss',
})
export class InventoryTableComponent implements OnInit {
  private readonly dialog = inject(MatDialog);
  private readonly changeDetectorRef = inject(ChangeDetectorRef);
  private readonly inventoryIngredientsService = inject(InventoryIngredientsService);

  protected items: InventoryItem[] = [];

  ngOnInit(): void {
    this.inventoryIngredientsService.getAll().subscribe({
      next: (ingredients) => {
        this.items = ingredients.map((ingredient) => this.toInventoryItem(ingredient));
        this.changeDetectorRef.markForCheck();
      },
      error: (error: unknown) => console.error('Unable to load ingredients', error),
    });
  }

  createIngredient(ingredient: NewInventoryIngredient): void {
    this.inventoryIngredientsService.create(ingredient).subscribe({
      next: (createdIngredient) => {
        this.items = [this.toInventoryItem(createdIngredient), ...this.items];
        this.changeDetectorRef.markForCheck();
      },
      error: (error: unknown) => console.error('Unable to create ingredient', error),
    });
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
          this.inventoryIngredientsService.update(item.id, ingredient).subscribe({
            next: (updatedIngredient) => {
              const updatedItem = this.toInventoryItem(updatedIngredient);
              this.items = this.items.map((current) =>
                current.id === item.id ? updatedItem : current,
              );
              this.changeDetectorRef.markForCheck();
            },
            error: (error: unknown) => console.error('Unable to update ingredient', error),
          });
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
          this.inventoryIngredientsService.delete(item.id).subscribe({
            next: () => {
              this.items = this.items.filter((current) => current.id !== item.id);
              this.changeDetectorRef.markForCheck();
            },
            error: (error: unknown) => console.error('Unable to delete ingredient', error),
          });
        }
      });
  }

  private toInventoryItem(ingredient: InventoryIngredient): InventoryItem {
    const isLowStock = ingredient.amount <= ingredient.alertThreshold;
    return {
      id: ingredient.id,
      name: ingredient.name,
      icon: 'inventory_2',
      amount: String(ingredient.amount),
      unit: ingredient.unit,
      totalPrice: ingredient.totalPrice,
      alertThreshold: ingredient.alertThreshold,
      createDate: new Date(ingredient.createdAt),
      expiryDate: new Date(ingredient.expiryDate),
      statusText: isLowStock ? 'ใกล้หมด' : 'ปกติ',
      statusClass: isLowStock
        ? 'bg-primary-container/30 text-on-primary-container'
        : 'bg-surface-container-high text-on-surface-variant',
    };
  }

  private toDateInputValue(date: Date): string {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }
}
