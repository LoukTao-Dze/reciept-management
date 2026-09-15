import {
  Component,
  computed,
  inject,
  Input,
  OnChanges,
  signal,
  SimpleChanges,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { UnitOfIngredient } from '../../enums/unit-of-ingredient.enum';
import { MenuCard, MenuIngredient } from '../../models/menu.model';
import { IngredientItem } from '../../models/recipe.model';
import { MenuCatalogService } from '../../services/menu-catalog.service';
import { NewMenu } from '../../models/menu.model';

@Component({
  selector: 'app-recipe-bom-panel',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './recipe-bom-panel.component.html',
  styleUrl: './recipe-bom-panel.component.scss',
})
export class RecipeBomPanelComponent implements OnChanges {
  @Input() menuItem: MenuCard | null = null;
  private menuCatalogService = inject(MenuCatalogService);
  private readonly dialog = inject(MatDialog);
  protected readonly isEditing = signal(false);
  protected readonly previewImageUrl = signal<string | null>(null);
  private selectedImageFile: File | null = null;
  listUnitOfIngredient = Object.values(UnitOfIngredient).map((unit) => ({
    value: unit,
    label: unit,
    selected: false,
  }));

  protected readonly ingredients = signal<readonly IngredientItem[]>([]);

  protected readonly sellPrice = signal(250);

  ngOnChanges(changes: SimpleChanges): void {
    const selectedMenu = changes['menuItem']?.currentValue as MenuCard | null;
    if (selectedMenu && !this.isEditing()) {
      this.sellPrice.set(Number(selectedMenu.price.replace('฿', '')));
      this.ingredients.set(
        (selectedMenu.recipeIngredients ?? []).map((ingredient) =>
          this.toIngredientItem(ingredient),
        ),
      );
    }
  }

  private toIngredientItem(ingredient: MenuIngredient): IngredientItem {
    return {
      ...ingredient,
      unit: ingredient.unit as UnitOfIngredient,
    };
  }

  private editSnapshot: { ingredients: readonly IngredientItem[]; sellPrice: number } | null = null;

  protected readonly totalCost = computed(() =>
    this.ingredients().reduce((sum, ingredient) => sum + ingredient.total, 0),
  );

  protected readonly profit = computed(() => this.sellPrice() - this.totalCost());

  protected readonly profitPercent = computed(() => {
    const price = this.sellPrice();
    return price > 0 ? (this.profit() / price) * 100 : 0;
  });

  protected readonly isSaving = signal(false);

  startEdit(): void {
    this.editSnapshot = { ingredients: this.ingredients(), sellPrice: this.sellPrice() };
    this.isEditing.set(true);
  }

  saveRecipe(): void {
    if (!this.menuItem?.id || this.isSaving()) {
      return;
    }

    const saveMenu = (imageUrl: string) => {
      const menu: NewMenu = {
        id: this.menuItem?.id,
        name: this.menuItem?.name ?? '',
        category: this.menuItem?.category ?? '',
        price: this.sellPrice(),
        imageUrl,
        recipeIngredients: this.ingredients().map((ingredient) => ({
          name: ingredient.name,
          quantity: ingredient.amount,
          unit: ingredient.unit,
        })),
      };

      this.menuCatalogService.updateMenu(menu).subscribe({
        next: () => {
          this.editSnapshot = null;
          this.isEditing.set(false);
          this.previewImageUrl.set(null);
          this.selectedImageFile = null;
          this.isSaving.set(false);
        },
        error: (error) => {
          console.error('[RECIPE_BOM] - FAILED TO UPDATE MENU', error);
          this.isSaving.set(false);
        },
      });
    };

    this.isSaving.set(true);
    if (this.selectedImageFile) {
      this.menuCatalogService.uploadImage(this.selectedImageFile).subscribe({
        next: (response) =>
          saveMenu(response.data.attachments[0]?.url ?? this.menuItem?.imageUrl ?? ''),
        error: (error) => {
          console.error('[RECIPE_BOM] - FAILED TO UPLOAD MENU IMAGE', error);
          this.isSaving.set(false);
        },
      });
      return;
    }

    saveMenu(this.menuItem.imageUrl);
  }

  onImageSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0] ?? null;
    if (!file) return;

    this.selectedImageFile = file;
    const reader = new FileReader();
    reader.onload = () => this.previewImageUrl.set(reader.result as string);
    reader.readAsDataURL(file);

    input.value = '';
  }

  cancelEdit(): void {
    if (this.editSnapshot) {
      this.ingredients.set(this.editSnapshot.ingredients);
      this.sellPrice.set(this.editSnapshot.sellPrice);
    }
    this.editSnapshot = null;
    this.isEditing.set(false);
    this.previewImageUrl.set(null);
    this.selectedImageFile = null;
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
        costPerUnit: 0,
        amount: 0,
        total: 0,
        unit: UnitOfIngredient.GRAM,
      },
      ...items,
    ]);
  }

  updateIngredientName(index: number, value: string): void {
    this.updateIngredientAt(index, { name: value });
  }

  updateIngredientUnit(index: number, value: string): void {
    if (!Object.values(UnitOfIngredient).includes(value as UnitOfIngredient)) {
      return;
    }
    this.updateIngredientAt(index, { unit: value as UnitOfIngredient });
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
