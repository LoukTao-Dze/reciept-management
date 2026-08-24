import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { UnitOfIngredient } from '../../enums/unit-of-ingredient.enum';
import { IngredientInput } from '../../models/menu.model';
import { MenuCatalogService } from '../../services/menu-catalog.service';

@Component({
  selector: 'app-add-menu-dialog',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-menu-dialog.component.html',
  styleUrl: './add-menu-dialog.component.scss',
})
export class AddMenuDialogComponent {
  private readonly dialogRef = inject(MatDialogRef<AddMenuDialogComponent>);
  private readonly menuCatalog = inject(MenuCatalogService);

  listUnitOfIngredient = Object.values(UnitOfIngredient).map((unit) => ({
    value: unit,
    label: unit,
  }));

  protected menuName = '';
  protected category = '';
  protected price: number | null = null;
  protected ingredients: IngredientInput[] = [];

  protected closeDialog(): void {
    this.dialogRef.close();
  }

  protected addIngredient(): void {
    this.ingredients.push({
      name: '',
      quantity: null,
      unit: UnitOfIngredient.GRAM,
    });
  }

  protected saveMenu(): void {
    const name = this.menuName.trim();
    const category = this.category.trim();

    if (!name || !category || this.price === null || this.price < 0) {
      return;
    }

    this.menuCatalog.addMenu({
      name,
      category,
      price: this.price,
      recipeIngredients: this.ingredients,
    });
    this.dialogRef.close(true);
  }
}
