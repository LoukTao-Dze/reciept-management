import { UnitOfIngredient } from '../enums/unit-of-ingredient.enum';

export interface MenuIngredient {
  name: string;
  costPerUnit: number;
  amount: number;
  total: number;
  unit: string | UnitOfIngredient;
}

export interface MenuCard {
  id?: string;
  name: string;
  category: string;
  price: string;
  ingredientCount: string;
  profitLabel: string;
  statusText: string;
  statusDotClass: string;
  imageUrl: string;
  imageAlt: string;
  recipeIngredients?: MenuIngredient[];
  highlighted?: boolean;
  dimmed?: boolean;
  grayscale?: boolean;
}

export interface NewMenu {
  id?: string;
  name: string;
  category: string;
  price: number;
  imageUrl: string;
  recipeIngredients: IngredientInput[];
}

export interface IngredientInput {
  name: string;
  quantity: number | null;
  unit: UnitOfIngredient;
}
