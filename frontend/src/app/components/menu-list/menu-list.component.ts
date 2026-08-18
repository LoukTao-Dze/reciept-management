import { Component } from '@angular/core';

interface MenuCard {
  readonly name: string;
  readonly category: string;
  readonly price: string;
  readonly ingredientCount: string;
  readonly profitLabel: string;
  readonly statusText: string;
  readonly statusDotClass: string;
  readonly imageUrl: string;
  readonly imageAlt: string;
  readonly highlighted?: boolean;
  readonly dimmed?: boolean;
  readonly grayscale?: boolean;
}

@Component({
  selector: 'app-menu-list',
  standalone: true,
  templateUrl: './menu-list.component.html',
  styleUrl: './menu-list.component.scss',
})
export class MenuListComponent {
  protected readonly categories = [
    { label: 'ทั้งหมด', active: true },
    { label: 'อาหารจานหลัก', active: false },
    { label: 'ของหวาน', active: false },
    { label: 'เครื่องดื่ม', active: false },
  ] as const;

  protected readonly menuCards: readonly MenuCard[] = [
    {
      name: 'ต้มยำกุ้งน้ำข้น',
      category: 'อาหารจานหลัก',
      price: '฿250',
      ingredientCount: 'วัตถุดิบ 8 รายการ',
      profitLabel: 'กำไร 65%',
      statusText: 'พร้อมขาย',
      statusDotClass: 'bg-[#4ade80]',
      imageUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDSLjKOmiQVbc-1lOuTkw4yDbK8x0TUC-BzJ2akQ-GFc3dKbe1EVBpthQK4A9D-wS4V-VqaOz5NSoC2coGLmobMMkLuDzwGy6HffseQ26q8EQh16ML6lWFW4Tp3-rMCjqPLbe28UyLrOEr5GoSsUxYrTBXtW5PJVZTMFs6R-gkBm8L0WPZmxnZcN5kMykuDlh62ogaeNc5ufzPdBZZuOjS8hPI9Ibcd0cFBos2e2j_QNWzc_xFF7LvxuQ',
      imageAlt:
        'A top-down, brightly lit professional food photography shot of a classic Thai Tom Yum Goong in a white ceramic bowl.',
      highlighted: true,
    },
    {
      name: 'ผัดไทยกุ้งสด',
      category: 'อาหารจานหลัก',
      price: '฿120',
      ingredientCount: 'วัตถุดิบ 12 รายการ',
      profitLabel: 'กำไร 72%',
      statusText: 'วัตถุดิบใกล้หมด',
      statusDotClass: 'bg-[#facc15]',
      imageUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBkQF-Lk37Xd7ei1gLx_rfNzjZH3hHXYFuviQ9ehVq28zed3p1wXQf2-uenGbUVnoHUQ0Hj_ZBP_SFUyqMsRVh8D0vMfy-duZaxXoEqSMicNxNxhVvpAuvXEQotiFbBkNJpUf8TMZY8cCaj-nuX1EyZdZuTwgoegYJLn6-ok8e6IpbubmHxohqUJmH0hXzT4oTThD3wqN8Cfr0sLdhed9cJHnPiarGYhAyXRrBDWxI36Kw17dhUKO5K_w',
      imageAlt:
        'A beautifully plated Pad Thai on a minimalist matte black plate, styled with soft directional lighting.',
      dimmed: true,
    },
    {
      name: 'ข้าวเหนียวมะม่วง',
      category: 'ของหวาน',
      price: '฿150',
      ingredientCount: 'วัตถุดิบ 4 รายการ',
      profitLabel: 'กำไร 55%',
      statusText: 'วัตถุดิบหมด',
      statusDotClass: 'bg-error',
      imageUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCmmhMj1zquCcbMLntsYK5T74kH-PZmH_C2FUKCHLiYvQL3ubgmK1NVa-N8ukxFGNFOaYq2rLABGz7dsyjO-AjfzgZC3G_Bg19qxFeNQFiFkPd_-wixvarVfDMNLTd8LAJimzccvm335UtwfnuGmXP_iLr2LBYBXZTo8x6HIcIi-C6x034qPuyd8FaU8LIBk5ehx-a6Tuncs-7B_PdExqPN-_83CJch224yN6D1rXXakCF2He9M15TJWA',
      imageAlt:
        'A slice of creamy mango sticky rice dessert on a minimalist white rectangular dish.',
      dimmed: true,
      grayscale: true,
    },
  ];
}
