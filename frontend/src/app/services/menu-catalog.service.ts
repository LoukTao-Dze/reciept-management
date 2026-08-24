import { Injectable, signal } from '@angular/core';
import { NewMenu } from '../models/menu.model';

@Injectable({ providedIn: 'root' })
export class MenuCatalogService {
  private readonly addedMenus = signal<readonly NewMenu[]>([]);

  readonly menus = this.addedMenus.asReadonly();

  addMenu(menu: Omit<NewMenu, 'id'>): void {
    this.addedMenus.update((menus) => [
      ...menus,
      {
        ...menu,
        id: `custom-${Date.now()}-${menus.length}`,
      },
    ]);
  }

  removeMenu(id: string): void {
    this.addedMenus.update((menus) => menus.filter((menu) => menu.id !== id));
  }

  getMenuList(): readonly NewMenu[] {
    return this.addedMenus();
  }
}
