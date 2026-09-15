export class CreateIngredientDto {
  name!: string;
  amount!: number;
  unit!: string;
  totalPrice!: number;
  alertThreshold!: number;
  expiryDate!: string;
}
