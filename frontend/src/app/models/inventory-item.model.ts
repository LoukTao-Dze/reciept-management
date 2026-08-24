export interface InventoryItem {
  readonly name: string;
  readonly icon: string;
  readonly amount: string;
  readonly unit: string;
  readonly totalPrice: number;
  readonly alertThreshold: number;
  readonly createDate: Date;
  readonly expiryDate: Date;
  readonly statusText: string;
  readonly statusClass: string;
  readonly highlighted?: boolean;
}
