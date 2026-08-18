import { Component } from '@angular/core';

interface IngredientItem {
  readonly name: string;
  readonly unitCostText: string;
  readonly amountText: string;
  readonly totalText: string;
}

@Component({
  selector: 'app-recipe-bom-panel',
  standalone: true,
  templateUrl: './recipe-bom-panel.component.html',
  styleUrl: './recipe-bom-panel.component.scss',
})
export class RecipeBomPanelComponent {
  protected readonly ingredients: readonly IngredientItem[] = [
    {
      name: 'กุ้งแชบ๊วย (ตัวใหญ่)',
      unitCostText: 'ต้นทุน: ฿500/กก.',
      amountText: '150 กรัม',
      totalText: '฿75.00',
    },
    {
      name: 'เห็ดฟาง',
      unitCostText: 'ต้นทุน: ฿120/กก.',
      amountText: '50 กรัม',
      totalText: '฿6.00',
    },
    {
      name: 'น้ำพริกเผา',
      unitCostText: 'ต้นทุน: ฿80/กก.',
      amountText: '20 กรัม',
      totalText: '฿1.60',
    },
    {
      name: 'กะทิสด',
      unitCostText: 'ต้นทุน: ฿60/ลิตร',
      amountText: '50 มล.',
      totalText: '฿3.00',
    },
  ];
}
