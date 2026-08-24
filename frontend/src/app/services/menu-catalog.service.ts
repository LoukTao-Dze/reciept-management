import { Injectable, signal } from '@angular/core';
import { IngredientInput, NewMenu } from '../models/menu.model';

@Injectable({ providedIn: 'root' })
export class MenuCatalogService {
  private readonly addedMenus = signal<readonly NewMenu[]>([]);

  readonly menus = this.addedMenus.asReadonly();

  addMenu(menu: Omit<NewMenu, 'id'>): void {
    console.info('\x1b[7;31;40m[DEBUGGER] ->> menu\x1b[0m', menu);
    this.addedMenus.update((menus) => [
      ...menus,
      {
        ...menu,
        id: `custom-${Date.now()}-${menus.length}`,
      },
    ]);
  }
  getMenuList(): readonly NewMenu[] {
    return this.addedMenus();
  }
}
