import { ChangeDetectorRef, Component, inject } from '@angular/core';
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
  private readonly changeDetectorRef = inject(ChangeDetectorRef);

  listUnitOfIngredient = Object.values(UnitOfIngredient).map((unit) => ({
    value: unit,
    label: unit,
  }));

  protected menuName = '';
  protected category = '';
  protected price: number | null = null;
  protected imageUrl = '';
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

  protected uploadImage(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];

    if (!file || !file.type.startsWith('image/')) {
      input.value = '';
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      this.imageUrl = typeof reader.result === 'string' ? reader.result : '';
      input.value = '';
      this.changeDetectorRef.markForCheck();
    };
    reader.onerror = () => {
      input.value = '';
    };
    reader.readAsDataURL(file);
  }

  protected saveMenu(): void {
    const name = this.menuName.trim();
    const category = this.category.trim();

    if (!name || !category || this.price === null || this.price < 0) {
      return;
    }
    const dataMenu = {
      name,
      category,
      price: this.price,
      imageUrl: this.imageUrl,
      recipeIngredients: this.ingredients,
    };
    this.menuCatalog.saveMenu(dataMenu).subscribe({
      next: (response) => {
        console.log('Menu saved successfully:', response);
        this.menuCatalog.addMenu(dataMenu);
        this.dialogRef.close(true);
      },
      error: (error) => {
        console.error('Error saving menu:', error);
      },
    });
  }
}
