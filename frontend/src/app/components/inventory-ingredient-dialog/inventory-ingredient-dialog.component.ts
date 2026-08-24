import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UnitOfIngredient } from '../../enums/unit-of-ingredient.enum';

export interface NewInventoryIngredient {
  readonly name: string;
  readonly amount: number;
  readonly unit: UnitOfIngredient;
  readonly totalPrice: number;
  readonly alertThreshold: number;
  readonly expiryDate: string;
}

export interface InventoryIngredientDialogData {
  readonly ingredient?: NewInventoryIngredient;
}

@Component({
  selector: 'app-inventory-ingredient-dialog',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './inventory-ingredient-dialog.component.html',
  styleUrl: './inventory-ingredient-dialog.component.scss',
})
export class InventoryIngredientDialogComponent {
  private readonly dialogRef = inject(MatDialogRef<InventoryIngredientDialogComponent>);
  private readonly data = inject<InventoryIngredientDialogData>(MAT_DIALOG_DATA, {
    optional: true,
  });

  protected readonly units = Object.values(UnitOfIngredient);
  protected readonly isEditing = !!this.data?.ingredient;
  protected name = this.data?.ingredient?.name ?? '';
  protected amount: number | null = this.data?.ingredient?.amount ?? null;
  protected unit = this.data?.ingredient?.unit ?? UnitOfIngredient.GRAM;
  protected totalPrice: number | null = this.data?.ingredient?.totalPrice ?? null;
  protected alertThreshold: number | null = this.data?.ingredient?.alertThreshold ?? null;
  protected expiryDate = this.data?.ingredient?.expiryDate ?? '';

  protected closeDialog(): void {
    this.dialogRef.close();
  }

  protected saveIngredient(): void {
    const name = this.name.trim();

    if (
      !name ||
      this.amount === null ||
      this.amount <= 0 ||
      this.totalPrice === null ||
      this.totalPrice < 0 ||
      this.alertThreshold === null ||
      this.alertThreshold <= 0 ||
      !this.expiryDate
    ) {
      return;
    }

    this.dialogRef.close({
      name,
      amount: this.amount,
      unit: this.unit,
      totalPrice: this.totalPrice,
      alertThreshold: this.alertThreshold,
      expiryDate: this.expiryDate,
    } satisfies NewInventoryIngredient);
  }
}
