import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NewInventoryIngredient } from '../components/inventory-ingredient-dialog/inventory-ingredient-dialog.component';
import { environment } from '../../environments/environment';

export interface InventoryIngredient extends NewInventoryIngredient {
  readonly id: string;
  readonly createdAt: string;
  readonly updatedAt: string;
}

@Injectable({ providedIn: 'root' })
export class InventoryIngredientsService {
  private readonly http = inject(HttpClient);
  private readonly url = `${environment.apiUrl}/ingredients`;

  getAll() {
    return this.http.get<InventoryIngredient[]>(this.url);
  }

  create(ingredient: NewInventoryIngredient) {
    return this.http.post<InventoryIngredient>(this.url, ingredient);
  }

  update(id: string, ingredient: NewInventoryIngredient) {
    return this.http.patch<InventoryIngredient>(`${this.url}/${id}`, ingredient);
  }

  delete(id: string) {
    return this.http.delete<void>(`${this.url}/${id}`);
  }
}
