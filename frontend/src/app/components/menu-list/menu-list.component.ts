import { Component, EventEmitter, inject, Output, signal } from '@angular/core';
import { mockMenuCards, mockCategories } from '../../shared/mocks/menulist.mock';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { AddMenuDialogComponent } from '../add-menu-dialog/add-menu-dialog.component';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { MenuCatalogService } from '../../services/menu-catalog.service';
import { MenuCard } from '../../models/menu.model';

@Component({
  selector: 'app-menu-list',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './menu-list.component.html',
  styleUrl: './menu-list.component.scss',
})
export class MenuListComponent {
  @Output() readonly menuSelected = new EventEmitter<MenuCard>();
  @Output() readonly menuDeleted = new EventEmitter<MenuCard>();

  private readonly dialog = inject(MatDialog);
  private readonly menuCatalog = inject(MenuCatalogService);

  private readonly menuCardsList = signal<readonly MenuCard[]>(mockMenuCards);
  categories = mockCategories;

  protected get menuCards(): readonly MenuCard[] {
    return [
      ...this.menuCardsList(),
      ...this.menuCatalog.menus().map((menu) => ({
        id: menu.id,
        name: menu.name,
        category: menu.category,
        price: `฿${menu.price}`,
        ingredientCount: 'วัตถุดิบ 0 รายการ',
        profitLabel: 'กำไร 100%',
        statusText: 'พร้อมขาย',
        statusDotClass: 'bg-[#4ade80]',
        imageUrl: mockMenuCards[0].imageUrl,
        imageAlt: `รูปภาพเมนู ${menu.name}`,
      })),
    ];
  }

  protected selectMenu(menu: MenuCard): void {
    this.menuSelected.emit(menu);
  }

  protected deleteMenu(menu: MenuCard): void {
    this.dialog
      .open(ConfirmDialogComponent, {
        width: 'min(100vw - 32px, 24rem)',
        autoFocus: false,
        data: {
          title: 'ยืนยันการลบเมนู',
          message: `คุณต้องการลบเมนู "${menu.name}" หรือไม่?`,
          confirmText: 'ลบเมนู',
          cancelText: 'ยกเลิก',
          danger: true,
        },
      })
      .afterClosed()
      .subscribe((confirmed) => {
        if (!confirmed) return;

        if (menu.id) {
          this.menuCatalog.removeMenu(menu.id);
        } else {
          this.menuCardsList.update((menus) => menus.filter((item) => item !== menu));
        }

        this.menuDeleted.emit(menu);
      });
  }

  protected openAddMenuModal(): void {
    this.dialog.open(AddMenuDialogComponent, {
      width: 'min(100vw - 32px, 64rem)',
      maxWidth: '100vw',
      maxHeight: '90vh',
      autoFocus: false,
      panelClass: 'add-menu-dialog-panel',
      backdropClass: 'add-menu-dialog-backdrop',
    });
  }
}
