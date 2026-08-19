import { Component } from '@angular/core';

interface InventoryItem {
  readonly name: string;
  readonly icon: string;
  readonly amount: string;
  readonly unit: string;
  readonly expiryDate: string;
  readonly statusText: string;
  readonly statusClass: string;
  readonly highlighted?: boolean;
}

@Component({
  selector: 'app-inventory-table',
  standalone: true,
  templateUrl: './inventory-table.component.html',
  styleUrl: './inventory-table.component.scss',
})
export class InventoryTableComponent {
  protected readonly items: readonly InventoryItem[] = [
    {
      name: 'ไข่ไก่ (เบอร์ 1)',
      icon: 'egg',
      amount: '15',
      unit: 'ฟอง',
      expiryDate: '12 ต.ค. 66',
      statusText: 'ใกล้หมด',
      statusClass: 'bg-primary-container/30 text-on-primary-container',
    },
    {
      name: 'เนื้อปลาแซลมอน',
      icon: 'set_meal',
      amount: '2.5',
      unit: 'กิโลกรัม',
      expiryDate: '15 ต.ค. 66',
      statusText: 'ปกติ',
      statusClass: 'bg-surface-container-high text-on-surface-variant',
      highlighted: true,
    },
    {
      name: 'น้ำมันหอย',
      icon: 'water_drop',
      amount: '500',
      unit: 'มิลลิลิตร',
      expiryDate: '20 พ.ย. 67',
      statusText: 'ปกติ',
      statusClass: 'bg-surface-container-high text-on-surface-variant',
    },
  ];
}
