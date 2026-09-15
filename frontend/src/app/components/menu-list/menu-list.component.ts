import {
  Component,
  EventEmitter,
  inject,
  OnInit,
  Output,
  signal,
  ChangeDetectorRef,
} from '@angular/core';
import { mockMenuCards, mockCategories } from '../../shared/mocks/menulist.mock';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { AddMenuDialogComponent } from '../add-menu-dialog/add-menu-dialog.component';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { MenuCatalogService } from '../../services/menu-catalog.service';
import { MenuCard, NewMenu } from '../../models/menu.model';

@Component({
  selector: 'app-menu-list',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './menu-list.component.html',
  styleUrl: './menu-list.component.scss',
})
export class MenuListComponent implements OnInit {
  @Output() readonly menuSelected = new EventEmitter<MenuCard>();
  @Output() readonly menuDeleted = new EventEmitter<MenuCard>();

  private readonly dialog = inject(MatDialog);
  private readonly menuCatalog = inject(MenuCatalogService);
  private readonly cdr = inject(ChangeDetectorRef);

  menuCardsList = signal<readonly MenuCard[]>([]);
  categories = mockCategories;

  ngOnInit(): void {
    this.menuCatalog.fetchMenuList().subscribe({
      next: (menuList) => {
        const menuCards = this.mappingMenuCard(menuList);
        this.menuCardsList.set(menuCards);
        this.menuSelected.emit(menuCards[0]);
      },
      error: (error) => console.error('[MENU_LIST] - FAILED TO LOAD MENU LIST', error),
    });
  }

  mappingMenuCard(menuList: NewMenu[]): MenuCard[] {
    return menuList.map((menu) => ({
      id: menu.id,
      name: menu.name,
      category: menu.category,
      price: `฿${menu.price}`,
      ingredientCount: `วัตถุดิบ ${menu.recipeIngredients?.length ?? 0} รายการ`,
      profitLabel: 'กำไร 100%',
      statusText: 'พร้อมขาย',
      statusDotClass: 'bg-[#4ade80]',
      imageUrl: menu.imageUrl || mockMenuCards[0].imageUrl,
      imageAlt: `รูปภาพเมนู ${menu.name}`,
      recipeIngredients: (menu.recipeIngredients ?? []).map((ingredient) => ({
        name: ingredient.name,
        costPerUnit: 0,
        amount: ingredient.quantity ?? 0,
        total: 0,
        unit: ingredient.unit,
      })),
    }));
  }

  protected get menuCards(): readonly MenuCard[] {
    return [
      ...this.menuCatalog.menus().map((menu) => ({
        id: menu.id,
        name: menu.name,
        category: menu.category,
        price: `฿${menu.price}`,
        ingredientCount: `วัตถุดิบ ${menu.recipeIngredients?.length ?? 0} รายการ`,
        profitLabel: 'กำไร 100%',
        statusText: 'พร้อมขาย',
        statusDotClass: 'bg-[#4ade80]',
        imageUrl: menu.imageUrl || mockMenuCards[0].imageUrl,
        imageAlt: `รูปภาพเมนู ${menu.name}`,
        recipeIngredients: (menu.recipeIngredients ?? []).map((ingredient) => ({
          name: ingredient.name,
          costPerUnit: 0,
          amount: ingredient.quantity ?? 0,
          total: 0,
          unit: ingredient.unit,
        })),
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
          this.menuCatalog.removeMenu(menu.id).subscribe({
            next: () => this.menuDeleted.emit(menu),
            error: (error) => console.error('[MENU_LIST] - FAILED TO DELETE MENU', error),
          });
        } else {
          this.menuCardsList.update((menus) => menus.filter((item) => item !== menu));
          this.menuDeleted.emit(menu);
        }
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
