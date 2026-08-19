import { Component } from '@angular/core';

@Component({
  selector: 'app-inventory-stock-entry-card',
  standalone: true,
  templateUrl: './inventory-stock-entry-card.component.html',
  styleUrl: './inventory-stock-entry-card.component.scss',
})
export class InventoryStockEntryCardComponent {
  protected readonly ingredientOptions: readonly string[] = [
    'ไข่ไก่ (เบอร์ 1)',
    'เนื้อปลาแซลมอน',
    'น้ำมันหอย',
  ];
}
