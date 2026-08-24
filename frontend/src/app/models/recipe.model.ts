import { UnitOfIngredient } from '../enums/unit-of-ingredient.enum';

export interface IngredientItem {
  name: string;
  costPerUnit: number;
  amount: number;
  total: number;
  unit: UnitOfIngredient;
}

export interface BomItem {
  readonly name: string;
  readonly quantity: string;
  readonly cost: number;
}

export interface MenuItem {
  readonly id: string;
  readonly name: string;
  readonly category: string;
  readonly price: number;
  readonly marginPercent: number;
  readonly badgeText: string;
  readonly imageUrl: string;
  readonly imageAlt: string;
  readonly heroImageUrl: string;
  readonly heroImageAlt: string;
  readonly bomItems: readonly BomItem[];
}
