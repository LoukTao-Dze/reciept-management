import { DOCUMENT, NgClass } from '@angular/common';
import {
  Component,
  HostListener,
  Inject,
  OnDestroy,
  OnInit,
  inject,
  ChangeDetectorRef,
} from '@angular/core';
import { MenuCatalogService } from '../../services/menu-catalog.service';
import { MenuItem } from '../../models/recipe.model';

@Component({
  selector: 'app-menu-list-showcase',
  standalone: true,
  imports: [NgClass],
  templateUrl: './menu-list-showcase.component.html',
  styleUrl: './menu-list-showcase.component.scss',
})
export class MenuListShowcaseComponent implements OnDestroy, OnInit {
  private readonly menuCatalog = inject(MenuCatalogService);
  protected readonly cdr = inject(ChangeDetectorRef);

  protected readonly categories = [
    'ทั้งหมด',
    'อาหารจานเดียว',
    'ต้ม/แกง',
    'ยำ/พล่า',
    'เครื่องดื่ม',
  ] as const;

  private defaultMenuItems: readonly MenuItem[] = [];

  protected get menuItems(): readonly MenuItem[] {
    return this.defaultMenuItems;
  }

  protected selectedCategory: (typeof this.categories)[number] = this.categories[0];
  protected searchKeyword = '';
  protected selectedMenuId?: string;
  protected isMobileDetailOpen = false;

  constructor(@Inject(DOCUMENT) private readonly document: Document) {}

  ngOnInit(): void {
    this.menuCatalog.fetchMenuList().subscribe({
      next: (menus) => {
        if (menus.length === 0) {
          return;
        }

        this.defaultMenuItems = menus.map((menu) => ({
          id: menu.id,
          name: menu.name,
          category: menu.category,
          price: menu.price,
          marginPercent: 100,
          badgeText: 'เมนูใหม่',
          imageUrl: menu.imageUrl,
          imageAlt: `รูปภาพเมนู ${menu.name}`,
          heroImageUrl: menu.imageUrl,
          heroImageAlt: `รูปภาพเมนู ${menu.name}`,
          bomItems: menu.recipeIngredients.map((ingredient) => ({
            name: ingredient.name,
            quantity:
              ingredient.quantity === null ? '-' : `${ingredient.quantity} ${ingredient.unit}`,
            cost: 0,
          })),
        }));
        if (this.defaultMenuItems.length > 0) {
          this.selectedMenuId = this.defaultMenuItems[0].id;
        }
        this.cdr.markForCheck();
      },
      error: (err) => {
        console.error('Failed to fetch menu list', err);
      },
    });
  }

  protected get filteredMenus(): readonly MenuItem[] {
    const normalizedKeyword = this.searchKeyword.trim().toLowerCase();
    return this.menuItems.filter((menu) => {
      const categoryMatches =
        this.selectedCategory === 'ทั้งหมด' || menu.category === this.selectedCategory;
      const keywordMatches =
        normalizedKeyword.length === 0 || menu.name.toLowerCase().includes(normalizedKeyword);
      return categoryMatches && keywordMatches;
    });
  }

  protected get selectedMenu(): MenuItem {
    const matchedById = this.menuItems.find((menu) => menu.id === this.selectedMenuId);
    if (matchedById) {
      return matchedById;
    }

    const firstFiltered = this.filteredMenus[0];
    if (firstFiltered) {
      return firstFiltered;
    }

    return this.menuItems[0] ?? this.defaultMenuItems[0];
  }

  protected get selectedMenuCost(): number {
    return this.selectedMenu?.bomItems.reduce((sum, item) => sum + item.cost, 0) ?? 0;
  }

  protected get selectedMenuProfit(): number {
    return (this.selectedMenu?.price ?? 0) - this.selectedMenuCost;
  }

  protected selectCategory(category: (typeof this.categories)[number]): void {
    this.selectedCategory = category;

    const menuAvailableInCategory = this.filteredMenus.some(
      (menu) => menu.id === this.selectedMenuId,
    );
    if (!menuAvailableInCategory && this.filteredMenus.length > 0) {
      this.selectedMenuId = this.filteredMenus[0].id;
    }
  }

  protected onSearch(keyword: string): void {
    this.searchKeyword = keyword;

    const menuAvailableInSearch = this.filteredMenus.some(
      (menu) => menu.id === this.selectedMenuId,
    );
    if (!menuAvailableInSearch && this.filteredMenus.length > 0) {
      this.selectedMenuId = this.filteredMenus[0].id;
    }
  }

  protected openDetails(menu: MenuItem): void {
    this.selectedMenuId = menu.id;
    if (this.isMobileViewport()) {
      this.isMobileDetailOpen = true;
      this.updateBodyScrollLock();
    }
  }

  protected closeDetails(): void {
    this.isMobileDetailOpen = false;
    this.updateBodyScrollLock();
  }

  protected isSelected(menu: MenuItem): boolean {
    return menu.id === this.selectedMenuId;
  }

  @HostListener('window:resize')
  protected onResize(): void {
    if (!this.isMobileViewport() && this.isMobileDetailOpen) {
      this.isMobileDetailOpen = false;
      this.updateBodyScrollLock();
    }
  }

  ngOnDestroy(): void {
    this.document.body.style.overflow = '';
  }

  private updateBodyScrollLock(): void {
    this.document.body.style.overflow = this.isMobileDetailOpen ? 'hidden' : '';
  }

  private isMobileViewport(): boolean {
    return typeof window !== 'undefined' && window.matchMedia('(max-width: 1023px)').matches;
  }
}
