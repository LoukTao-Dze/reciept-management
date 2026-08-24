export interface InventoryItem {
  readonly name: string;
  readonly icon: string;
  readonly amount: string;
  readonly unit: string;
  readonly expiryDate: string;
  readonly statusText: string;
  readonly statusClass: string;
  readonly highlighted?: boolean;
}
