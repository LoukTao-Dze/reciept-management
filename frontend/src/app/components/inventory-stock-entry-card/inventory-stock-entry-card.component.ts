import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewInventoryIngredient } from '../inventory-ingredient-dialog/inventory-ingredient-dialog.component';
import { UnitOfIngredient } from '../../enums/unit-of-ingredient.enum';

@Component({
  selector: 'app-inventory-stock-entry-card',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './inventory-stock-entry-card.component.html',
  styleUrl: './inventory-stock-entry-card.component.scss',
})
export class InventoryStockEntryCardComponent {
  @Output() readonly stockEntrySaved = new EventEmitter<NewInventoryIngredient>();

  protected readonly ingredientOptions: readonly string[] = [];
  protected readonly units = Object.values(UnitOfIngredient);
  protected readonly entryDate = new Date().toLocaleDateString('th-TH', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });

  protected name = '';
  protected amount: number | null = null;
  protected unit = UnitOfIngredient.GRAM;
  protected totalPrice: number | null = null;
  protected alertThreshold: number | null = null;
  protected expiryDate = '';

  protected saveStockEntry(): void {
    if (
      !this.name ||
      this.amount === null ||
      this.amount <= 0 ||
      this.totalPrice === null ||
      this.totalPrice < 0 ||
      !this.expiryDate
    ) {
      return;
    }

    this.stockEntrySaved.emit({
      name: this.name,
      amount: this.amount,
      unit: this.unit,
      totalPrice: this.totalPrice,
      alertThreshold: this.alertThreshold || 0,
      expiryDate: this.expiryDate,
    });

    this.amount = null;
    this.totalPrice = null;
    this.alertThreshold = null;
    this.expiryDate = '';
  }
}
