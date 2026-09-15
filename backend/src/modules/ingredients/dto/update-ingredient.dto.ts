import { CreateIngredientDto } from './create-ingredient.dto';

export class UpdateIngredientDto implements Partial<CreateIngredientDto> {
  name?: string;
  amount?: number;
  unit?: string;
  totalPrice?: number;
  alertThreshold?: number;
  expiryDate?: string;
}
