import { Component, inject } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';

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
  imports: [MatDialogModule],
  templateUrl: './inventory-table.component.html',
  styleUrl: './inventory-table.component.scss',
})
export class InventoryTableComponent {
  private readonly dialog = inject(MatDialog);

  protected items: InventoryItem[] = [
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

  protected deleteItem(item: InventoryItem): void {
    this.dialog
      .open(ConfirmDialogComponent, {
        width: 'min(100vw - 32px, 24rem)',
        autoFocus: false,
        data: {
          title: 'ลบวัตถุดิบ',
          message: `ยืนยันการนำ "${item.name}" ออกจากรายการวัตถุดิบใช่หรือไม่?`,
          confirmText: 'ลบ',
          danger: true,
        },
      })
      .afterClosed()
      .subscribe((confirmed) => {
        if (confirmed) {
          this.items = this.items.filter((current) => current !== item);
        }
      });
  }
}
