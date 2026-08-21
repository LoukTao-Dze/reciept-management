import { DOCUMENT, NgClass } from '@angular/common';
import { Component, HostListener, Inject, OnDestroy } from '@angular/core';

interface BomItem {
  readonly name: string;
  readonly quantity: string;
  readonly cost: number;
}

interface MenuItem {
  readonly id: string;
  readonly name: string;
  readonly category: string;
  readonly price: number;
  readonly marginPercent: number;
  readonly badgeText: string;
  readonly imageUrl: string;
  readonly imageAlt: string;
  readonly heroImageUrl: string;
  readonly heroImageAlt: string;
  readonly bomItems: readonly BomItem[];
}

@Component({
  selector: 'app-menu-list-showcase',
  standalone: true,
  imports: [NgClass],
  templateUrl: './menu-list-showcase.component.html',
  styleUrl: './menu-list-showcase.component.scss',
})
export class MenuListShowcaseComponent implements OnDestroy {
  protected readonly categories = [
    'ทั้งหมด',
    'อาหารจานเดียว',
    'ต้ม/แกง',
    'ยำ/พล่า',
    'เครื่องดื่ม',
  ] as const;

  protected readonly menuItems: readonly MenuItem[] = [
    {
      id: 'pad-thai',
      name: 'ผัดไทยกุ้งสด',
      category: 'อาหารจานเดียว',
      price: 150,
      marginPercent: 65,
      badgeText: 'ยอดนิยม',
      imageUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuAIbfhv344crFiqvaDgx34YODXLo-CrVNehefWrpXn8kmnP5Y2z26EJee-wQ9mOZx_KvtKhpXw8buufzrx-lGkEVvpJwXLKKgoqm9-HNU5qB9GPnRMCdfb_GqCUE_LKaoUGZvoDefokQ7D4xCmaMf-R1QTDMB9gzLcvrHIfn-RQc7FgP1TmA6IOA9QsvgufdaOleScnf_hvEvC6wyvbRr87JtqlL_orA7xX7r5bTANmRDQ_asF1RQ3bjQ',
      imageAlt: 'Top down shot of authentic Thai Pad Thai noodles with fresh large shrimp.',
      heroImageUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCSzBDI_b6LWg96I1YRIlZDRgT-jkxQ_8GPsbV38pOCU9rQgBjmD4S4hUu_hp1CYCeSOXo06VvE7zljQou8e-kAivs0P54ZXXz4AZbYkYFrXQ2CNG4RgwCFzWBmm2NJlZegux1s3-JmXMMZXdtFuwOwW85hIq7Qm9QH8CpLlu1C5wNFZ5WkXwNW5TaqWDkHvQ-sDeIYScsfQWTnHFtHL_t0he5qT9wBKf3KBRMlddiHOPzVu1e8O9Hp2g',
      heroImageAlt: 'Close up of Pad Thai with shrimp and garnish.',
      bomItems: [
        { name: 'เส้นจันท์', quantity: '150 กรัม', cost: 8 },
        { name: 'กุ้งสด', quantity: '3 ตัว', cost: 30 },
        { name: 'น้ำซอสผัดไทย', quantity: '50 ml', cost: 5.5 },
        { name: 'ถั่วงอก/กุยช่าย', quantity: '50 กรัม', cost: 4 },
        { name: 'ไข่ไก่', quantity: '1 ฟอง', cost: 5 },
      ],
    },
    {
      id: 'green-curry',
      name: 'แกงเขียวหวานไก่',
      category: 'ต้ม/แกง',
      price: 180,
      marginPercent: 58,
      badgeText: 'ขายดี',
      imageUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuD_TYj7S4h3aEZOlkWF-vY7J9PVNsL5-EwR4R77-Q_yvPGdzjl_tC0EBftsuuriXisaRpsCuC8fVpoHU8QwpGKGlO5jFG-JhT_nlcLH8g3AoTbUjZh7sOKRNqCyk0B3lG9WokvcGPi7TTSSkiW-MgwlTDA4rmn7AgIutek6_CdmBW-s153GmIDSpqYNL2k2X1dWFsngjbbkDqSHUkms_82ZSuaJkAL8TuoMvvFzdGeNWHMczcYr0KmLhw',
      imageAlt: 'Rich green curry with chicken in a rustic ceramic bowl.',
      heroImageUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuD_TYj7S4h3aEZOlkWF-vY7J9PVNsL5-EwR4R77-Q_yvPGdzjl_tC0EBftsuuriXisaRpsCuC8fVpoHU8QwpGKGlO5jFG-JhT_nlcLH8g3AoTbUjZh7sOKRNqCyk0B3lG9WokvcGPi7TTSSkiW-MgwlTDA4rmn7AgIutek6_CdmBW-s153GmIDSpqYNL2k2X1dWFsngjbbkDqSHUkms_82ZSuaJkAL8TuoMvvFzdGeNWHMczcYr0KmLhw',
      heroImageAlt: 'Top view of Thai green curry in warm lighting.',
      bomItems: [
        { name: 'เนื้อไก่', quantity: '180 กรัม', cost: 28 },
        { name: 'พริกแกงเขียวหวาน', quantity: '40 กรัม', cost: 6.5 },
        { name: 'กะทิ', quantity: '200 ml', cost: 13 },
        { name: 'มะเขือเปราะ', quantity: '80 กรัม', cost: 4.5 },
      ],
    },
    {
      id: 'som-tum',
      name: 'ส้มตำไทย',
      category: 'ยำ/พล่า',
      price: 80,
      marginPercent: 72,
      badgeText: 'ต้นทุนต่ำ',
      imageUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBlbm7OKico2ft0ZSIGoAMyQn9kNm50Ox24O29r4UVtyANVHRsTptbe1enRsLsQ8E41GhszBlWG_XzQUU9kQ3GKeAk_uGtzl-H5jNA5-oIOKfXkE85XVPebsZDktgAxfcOl2T4HZtyhGj1TL_PCrsDgLaztyakIaJcOGEXNkBI2XSF0EtbMBm8lAFq2OVWZjutnZOnE-q3WTHBaLGkVXn9t5I2Hsl8w_NQWIRqi8YciikCEDk86uS85pA',
      imageAlt: 'Spicy Thai papaya salad in a wooden mortar.',
      heroImageUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBlbm7OKico2ft0ZSIGoAMyQn9kNm50Ox24O29r4UVtyANVHRsTptbe1enRsLsQ8E41GhszBlWG_XzQUU9kQ3GKeAk_uGtzl-H5jNA5-oIOKfXkE85XVPebsZDktgAxfcOl2T4HZtyhGj1TL_PCrsDgLaztyakIaJcOGEXNkBI2XSF0EtbMBm8lAFq2OVWZjutnZOnE-q3WTHBaLGkVXn9t5I2Hsl8w_NQWIRqi8YciikCEDk86uS85pA',
      heroImageAlt: 'Colorful Som Tum with fresh herbs and chili.',
      bomItems: [
        { name: 'มะละกอ', quantity: '120 กรัม', cost: 5 },
        { name: 'ถั่วฝักยาว', quantity: '25 กรัม', cost: 2.5 },
        { name: 'มะเขือเทศ', quantity: '30 กรัม', cost: 2 },
        { name: 'น้ำปรุงส้มตำ', quantity: '35 ml', cost: 4 },
      ],
    },
    {
      id: 'tom-yum',
      name: 'ต้มยำกุ้ง',
      category: 'ต้ม/แกง',
      price: 250,
      marginPercent: 55,
      badgeText: 'เมนูแนะนำ',
      imageUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBBdrxPA0D6-oHHZo7RlHPDrsQRdbiC0I3Hs6AlbvL2p5eezLQ0Yl2CMQ2njnMnmi9rEZcFE9bBpld1HBhlizoHG6AUZQmV4pUHR9tt4JYA2QNS1eQ2BEwKG--qjWgKEjKDc95oa_pWYA2hHP22b06eF12qxpTjWTlYToKZzGpS2VfnYirf83QwhL3dQ94X8OrPBUIF66tgfBMtZ4TUFB_bxidFVa1aJvPJxu9JWcAUTqC6GXrC67-DwA',
      imageAlt: 'Tom Yum Goong spicy soup with vibrant orange broth.',
      heroImageUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBBdrxPA0D6-oHHZo7RlHPDrsQRdbiC0I3Hs6AlbvL2p5eezLQ0Yl2CMQ2njnMnmi9rEZcFE9bBpld1HBhlizoHG6AUZQmV4pUHR9tt4JYA2QNS1eQ2BEwKG--qjWgKEjKDc95oa_pWYA2hHP22b06eF12qxpTjWTlYToKZzGpS2VfnYirf83QwhL3dQ94X8OrPBUIF66tgfBMtZ4TUFB_bxidFVa1aJvPJxu9JWcAUTqC6GXrC67-DwA',
      heroImageAlt: 'Classic Tom Yum served with prawns and herbs.',
      bomItems: [
        { name: 'กุ้งสด', quantity: '6 ตัว', cost: 70 },
        { name: 'เห็ดฟาง', quantity: '80 กรัม', cost: 9 },
        { name: 'พริกเผา', quantity: '20 กรัม', cost: 4.5 },
        { name: 'น้ำมะนาว', quantity: '30 ml', cost: 5 },
      ],
    },
    {
      id: 'thai-tea',
      name: 'ชาไทยเย็น',
      category: 'เครื่องดื่ม',
      price: 65,
      marginPercent: 80,
      badgeText: 'กำไรสูง',
      imageUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDDCota5_-b-E3B1lbVWN5eyqdasfFMXuWZ-V9eaWYQvC9dbK1BkUoNKu6Tz0Unz7k3WDToKG7JnBG0tsbtYmAofWQXThuq98A3fKeDS8mMIxZwj3m40piMmWK6Q69jwIbAE4yrvkvdgHWEc_7_di4M0d02yQNlLm6tAXY3KWUIOhwDWX3N_41AHay2Od0ZZBinqSHU17-NW8AHTmOfkwnQhdGZg3pRRCtI9KRfuPY1NiloJLex3yefYA',
      imageAlt: 'Classic Thai iced tea in a tall glass with milk swirling in.',
      heroImageUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDDCota5_-b-E3B1lbVWN5eyqdasfFMXuWZ-V9eaWYQvC9dbK1BkUoNKu6Tz0Unz7k3WDToKG7JnBG0tsbtYmAofWQXThuq98A3fKeDS8mMIxZwj3m40piMmWK6Q69jwIbAE4yrvkvdgHWEc_7_di4M0d02yQNlLm6tAXY3KWUIOhwDWX3N_41AHay2Od0ZZBinqSHU17-NW8AHTmOfkwnQhdGZg3pRRCtI9KRfuPY1NiloJLex3yefYA',
      heroImageAlt: 'Iced Thai tea with ice and creamy milk layer.',
      bomItems: [
        { name: 'ใบชาไทย', quantity: '15 กรัม', cost: 3.5 },
        { name: 'นมข้นหวาน', quantity: '25 ml', cost: 4.5 },
        { name: 'นมสด', quantity: '40 ml', cost: 4 },
        { name: 'น้ำแข็ง', quantity: '1 แก้ว', cost: 2.5 },
      ],
    },
  ];

  protected selectedCategory: (typeof this.categories)[number] = this.categories[0];
  protected searchKeyword = '';
  protected selectedMenuId = this.menuItems[0].id;
  protected isMobileDetailOpen = false;

  constructor(@Inject(DOCUMENT) private readonly document: Document) {}

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

    return this.menuItems[0];
  }

  protected get selectedMenuCost(): number {
    return this.selectedMenu.bomItems.reduce((sum, item) => sum + item.cost, 0);
  }

  protected get selectedMenuProfit(): number {
    return this.selectedMenu.price - this.selectedMenuCost;
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
