import { Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';

interface IngredientItem {
  name: string;
  costPerUnit: string;
  unitOfMeasure: string;
  amount: number;
  total: number;
  unit: unitOfIngredient;
}

enum unitOfIngredient {
  KILO = 'กก.',
  GRAM = 'กรัม',
  LITER = 'ลิตร',
  MILLILITER = 'มล.',
  PIECE = 'ชิ้น',
}

@Component({
  selector: 'app-recipe-bom-panel',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './recipe-bom-panel.component.html',
  styleUrl: './recipe-bom-panel.component.scss',
})
export class RecipeBomPanelComponent {
  private readonly dialog = inject(MatDialog);
  protected readonly isEditing = signal(false);
  listUnitOfIngredient = Object.values(unitOfIngredient).map((unit) => ({
    value: unit,
    label: unit,
  }));

  protected readonly ingredients = signal<readonly IngredientItem[]>([
    {
      name: 'กุ้งแชบ๊วย (ตัวใหญ่)',
      costPerUnit: '500',
      unitOfMeasure: 'กก.',
      amount: 150,
      total: 75.0,
      unit: unitOfIngredient.GRAM,
    },
    {
      name: 'เห็ดฟาง',
      costPerUnit: '120',
      unitOfMeasure: 'กก.',
      amount: 50,
      total: 6.0,
      unit: unitOfIngredient.GRAM,
    },
    {
      name: 'น้ำพริกเผา',
      costPerUnit: '80',
      unitOfMeasure: 'กก.',
      amount: 20,
      total: 1.6,
      unit: unitOfIngredient.GRAM,
    },
    {
      name: 'กะทิสด',
      costPerUnit: '60',
      unitOfMeasure: 'ลิตร',
      amount: 50,
      total: 3.0,
      unit: unitOfIngredient.MILLILITER,
    },
  ]);

  protected readonly sellPrice = signal(250);

  protected readonly totalCost = computed(() =>
    this.ingredients().reduce((sum, ingredient) => sum + ingredient.total, 0),
  );

  protected readonly profit = computed(() => this.sellPrice() - this.totalCost());

  protected readonly profitPercent = computed(() => {
    const price = this.sellPrice();
    return price > 0 ? (this.profit() / price) * 100 : 0;
  });

  startEdit(): void {
    this.isEditing.set(true);
  }

  saveRecipe(): void {
    this.isEditing.set(false);
  }

  updateSellPrice(value: string): void {
    const parsed = Number(value);
    this.sellPrice.set(Number.isNaN(parsed) ? 0 : parsed);
  }

  removeIngredient(ingredient: IngredientItem): void {
    this.dialog
      .open(ConfirmDialogComponent, {
        width: 'min(100vw - 32px, 24rem)',
        autoFocus: false,
        data: {
          title: 'ยืนยันการลบวัตถุดิบ',
          message: `คุณต้องการลบวัตถุดิบ "${ingredient.name}" หรือไม่?`,
          confirmText: 'ลบ',
          cancelText: 'ยกเลิก',
          danger: true,
        },
      })
      .afterClosed()
      .subscribe((confirmed) => {
        if (confirmed) {
          this.ingredients.update((items) => items.filter((item) => item !== ingredient));
        }
      });
  }

  addIngredient(): void {
    if (!this.isEditing()) {
      return;
    }
    this.ingredients.update((items) => [
      {
        name: '',
        costPerUnit: '0',
        unitOfMeasure: 'กก.',
        amount: 0,
        total: 0,
        unit: unitOfIngredient.GRAM,
      },
      ...items,
    ]);
  }

  updateIngredientName(index: number, value: string): void {
    this.updateIngredientAt(index, { name: value });
  }

  updateIngredientUnit(index: number, value: string): void {
    if (!Object.values(unitOfIngredient).includes(value as unitOfIngredient)) {
      return;
    }
    this.updateIngredientAt(index, { unit: value as unitOfIngredient });
  }

  updateIngredientAmount(index: number, value: string): void {
    const amount = Number(value);
    if (Number.isNaN(amount)) {
      return;
    }
    const costPerUnit = Number(this.ingredients()[index].costPerUnit);
    const total = Number.isNaN(costPerUnit) ? 0 : (costPerUnit * amount) / 1000;
    this.updateIngredientAt(index, { amount, total });
  }

  private updateIngredientAt(index: number, changes: Partial<IngredientItem>): void {
    this.ingredients.update((items) =>
      items.map((item, i) => (i === index ? { ...item, ...changes } : item)),
    );
  }
}
