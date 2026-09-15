import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UnitOfIngredient } from '../../enums/unit-of-ingredient.enum';
import { IngredientInput } from '../../models/menu.model';
import { MenuCatalogService } from '../../services/menu-catalog.service';
import { switchMap } from 'rxjs';
export interface DiscordMessageResponse {
  type: number;
  content: string;
  mentions: any[];
  mention_roles: any[];
  attachments: Attachment[];
  embeds: any[];
  timestamp: string;
  edited_timestamp: any;
  flags: number;
  components: any[];
  id: string;
  channel_id: string;
  author: Author;
  pinned: boolean;
  mention_everyone: boolean;
  tts: boolean;
  webhook_id: string;
}

export interface UploadImageResponse {
  status: number;
  data: DiscordMessageResponse;
}

export interface Attachment {
  id: string;
  filename: string;
  size: number;
  url: string;
  proxy_url: string;
  width: number;
  height: number;
  content_type: string;
  content_scan_version: number;
  placeholder: string;
  placeholder_version: number;
}

export interface Author {
  id: string;
  username: string;
  avatar: any;
  discriminator: string;
  public_flags: number;
  flags: number;
  bot: boolean;
  global_name: any;
  clan: any;
  primary_guild: any;
}

interface AddMenuDialogData {
  ingredientsList: { name: string }[];
}

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
  private readonly data = inject<AddMenuDialogData>(MAT_DIALOG_DATA);

  listUnitOfIngredient = Object.values(UnitOfIngredient).map((unit) => ({
    value: unit,
    label: unit,
  }));

  protected menuName = '';
  protected category = '';
  protected price: number | null = null;
  protected imageUrl = '';
  protected ingredientsList = this.data.ingredientsList;
  protected ingredients: IngredientInput[] = [];
  protected imageFile: File | null = null;

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
      this.imageFile = file;
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

    if (!name || !category || this.price === null || this.price < 0 || !this.imageFile) {
      return;
    }

    const dataMenu = {
      name,
      category,
      price: this.price,
      imageUrl: '',
      recipeIngredients: this.ingredients,
    };

    this.menuCatalog
      .uploadImage(this.imageFile)
      .pipe(
        switchMap((response) => {
          if (
            response &&
            response.data &&
            response.data.attachments &&
            response.data.attachments.length > 0
          ) {
            dataMenu.imageUrl = response.data.attachments[0].url;
          }
          return this.menuCatalog.saveMenu(dataMenu);
        }),
      )
      .subscribe({
        next: (response) => {
          console.log('Menu saved successfully:', response);
          this.menuCatalog.addMenu(dataMenu);
          this.dialogRef.close(true);
        },
        error: (error) => {
          console.error('Error uploading image:', error);
        },
      });
  }
}
