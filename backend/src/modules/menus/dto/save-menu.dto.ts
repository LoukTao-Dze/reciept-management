export interface SaveMenuIngredientDto {
  name: string;
  quantity: number | null;
  unit: string;
}

export interface SaveMenuDto {
  id?: string;
  name: string;
  category: string;
  price: number;
  imageUrl: string;
  recipeIngredients: SaveMenuIngredientDto[];
}

export interface MenuListItemDto {
  id: string;
  name: string;
  category: string;
  price: number;
  imageUrl: string;
  recipeIngredients: SaveMenuIngredientDto[];
}
