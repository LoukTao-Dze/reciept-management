import { Component } from '@angular/core';
import * as i0 from "@angular/core";
const _forTrack0 = ($index, $item) => $item.label;
const _forTrack1 = ($index, $item) => $item.name;
function MenuListComponent_For_23_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵdomElementStart(0, "button", 17);
    i0.ɵɵtext(1);
    i0.ɵɵdomElementEnd();
} if (rf & 2) {
    const category_r1 = ctx.$implicit;
    i0.ɵɵclassMap(category_r1.active ? "bg-primary-container text-on-primary-container shadow-sm" : "bg-surface-container text-on-surface-variant transition-colors hover:bg-surface-container-high");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", category_r1.label, " ");
} }
function MenuListComponent_For_26_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵdomElement(0, "div", 19);
} }
function MenuListComponent_For_26_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵdomElementStart(0, "article", 18);
    i0.ɵɵconditionalCreate(1, MenuListComponent_For_26_Conditional_1_Template, 1, 0, "div", 19);
    i0.ɵɵdomElementStart(2, "div", 20);
    i0.ɵɵdomElement(3, "img", 21);
    i0.ɵɵdomElementStart(4, "div", 22);
    i0.ɵɵdomElement(5, "span", 23);
    i0.ɵɵdomElementStart(6, "span", 24);
    i0.ɵɵtext(7);
    i0.ɵɵdomElementEnd()()();
    i0.ɵɵdomElementStart(8, "div", 25)(9, "div", 26)(10, "div")(11, "h3", 27);
    i0.ɵɵtext(12);
    i0.ɵɵdomElementEnd();
    i0.ɵɵdomElementStart(13, "span", 28);
    i0.ɵɵtext(14);
    i0.ɵɵdomElementEnd()();
    i0.ɵɵdomElementStart(15, "span", 29);
    i0.ɵɵtext(16);
    i0.ɵɵdomElementEnd()();
    i0.ɵɵdomElementStart(17, "div", 30)(18, "div", 31)(19, "span", 32);
    i0.ɵɵtext(20, "inventory_2");
    i0.ɵɵdomElementEnd();
    i0.ɵɵdomElementStart(21, "span", 33);
    i0.ɵɵtext(22);
    i0.ɵɵdomElementEnd()();
    i0.ɵɵdomElementStart(23, "div", 34)(24, "span", 35);
    i0.ɵɵtext(25, "trending_up");
    i0.ɵɵdomElementEnd();
    i0.ɵɵdomElementStart(26, "span", 36);
    i0.ɵɵtext(27);
    i0.ɵɵdomElementEnd()()()()();
} if (rf & 2) {
    const card_r2 = ctx.$implicit;
    i0.ɵɵclassMap(card_r2.highlighted ? "relative bg-primary-fixed/20 shadow-md hover:-translate-y-1" : "bg-surface-container-lowest opacity-80 shadow-sm hover:-translate-y-1 hover:opacity-100 hover:shadow-md");
    i0.ɵɵadvance();
    i0.ɵɵconditional(card_r2.highlighted ? 1 : -1);
    i0.ɵɵadvance(2);
    i0.ɵɵclassProp("grayscale-\\[20\\%\\]", card_r2.grayscale)("group-hover\\:grayscale-0", card_r2.grayscale);
    i0.ɵɵdomProperty("alt", card_r2.imageAlt)("src", card_r2.imageUrl, i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance(2);
    i0.ɵɵclassMap(card_r2.statusDotClass);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(card_r2.statusText);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(card_r2.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(card_r2.category);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(card_r2.price);
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(card_r2.ingredientCount);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(card_r2.profitLabel);
} }
export class MenuListComponent {
    categories = [
        { label: 'ทั้งหมด', active: true },
        { label: 'อาหารจานหลัก', active: false },
        { label: 'ของหวาน', active: false },
        { label: 'เครื่องดื่ม', active: false },
    ];
    menuCards = [
        {
            name: 'ต้มยำกุ้งน้ำข้น',
            category: 'อาหารจานหลัก',
            price: '฿250',
            ingredientCount: 'วัตถุดิบ 8 รายการ',
            profitLabel: 'กำไร 65%',
            statusText: 'พร้อมขาย',
            statusDotClass: 'bg-[#4ade80]',
            imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDSLjKOmiQVbc-1lOuTkw4yDbK8x0TUC-BzJ2akQ-GFc3dKbe1EVBpthQK4A9D-wS4V-VqaOz5NSoC2coGLmobMMkLuDzwGy6HffseQ26q8EQh16ML6lWFW4Tp3-rMCjqPLbe28UyLrOEr5GoSsUxYrTBXtW5PJVZTMFs6R-gkBm8L0WPZmxnZcN5kMykuDlh62ogaeNc5ufzPdBZZuOjS8hPI9Ibcd0cFBos2e2j_QNWzc_xFF7LvxuQ',
            imageAlt: 'A top-down, brightly lit professional food photography shot of a classic Thai Tom Yum Goong in a white ceramic bowl.',
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
            imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBkQF-Lk37Xd7ei1gLx_rfNzjZH3hHXYFuviQ9ehVq28zed3p1wXQf2-uenGbUVnoHUQ0Hj_ZBP_SFUyqMsRVh8D0vMfy-duZaxXoEqSMicNxNxhVvpAuvXEQotiFbBkNJpUf8TMZY8cCaj-nuX1EyZdZuTwgoegYJLn6-ok8e6IpbubmHxohqUJmH0hXzT4oTThD3wqN8Cfr0sLdhed9cJHnPiarGYhAyXRrBDWxI36Kw17dhUKO5K_w',
            imageAlt: 'A beautifully plated Pad Thai on a minimalist matte black plate, styled with soft directional lighting.',
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
            imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCmmhMj1zquCcbMLntsYK5T74kH-PZmH_C2FUKCHLiYvQL3ubgmK1NVa-N8ukxFGNFOaYq2rLABGz7dsyjO-AjfzgZC3G_Bg19qxFeNQFiFkPd_-wixvarVfDMNLTd8LAJimzccvm335UtwfnuGmXP_iLr2LBYBXZTo8x6HIcIi-C6x034qPuyd8FaU8LIBk5ehx-a6Tuncs-7B_PdExqPN-_83CJch224yN6D1rXXakCF2He9M15TJWA',
            imageAlt: 'A slice of creamy mango sticky rice dessert on a minimalist white rectangular dish.',
            dimmed: true,
            grayscale: true,
        },
    ];
    static ɵfac = function MenuListComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || MenuListComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: MenuListComponent, selectors: [["app-menu-list"]], decls: 27, vars: 0, consts: [[1, "relative", "mb-xl", "flex", "flex-col", "gap-md", "md:flex-row", "md:items-center", "md:justify-between"], [1, "flex-1"], [1, "relative", "mb-xs", "inline-block", "font-headline-lg", "text-headline-lg", "text-primary"], [1, "absolute", "-bottom-2", "left-0", "h-1", "w-1/3", "rounded-full", "bg-tertiary", "opacity-50"], [1, "mt-sm", "max-w-2xl", "font-body-md", "text-body-md", "text-on-surface-variant"], [1, "relative", "z-10", "flex", "items-center", "gap-sm"], ["type", "button", 1, "flex", "-translate-y-0", "items-center", "gap-xs", "rounded-full", "bg-surface-container", "px-md", "py-sm", "font-label-md", "text-label-md", "text-on-surface-variant", "shadow-sm", "transition-all", "hover:-translate-y-1", "hover:bg-surface-container-high"], [1, "material-symbols-outlined", "text-[20px]"], ["type", "button", 1, "flex", "-translate-y-0", "items-center", "gap-xs", "rounded-full", "bg-primary", "px-md", "py-sm", "font-label-md", "text-label-md", "text-on-primary", "shadow-md", "transition-all", "hover:-translate-y-1", "hover:bg-surface-tint"], [1, "sticky", "top-0", "z-20", "flex", "flex-wrap", "items-center", "gap-sm", "rounded-xl", "bg-surface-container-lowest", "p-sm", "shadow-sm"], [1, "relative", "min-w-[200px]", "flex-1"], [1, "material-symbols-outlined", "absolute", "left-sm", "top-1/2", "-translate-y-1/2", "text-[20px]", "text-on-surface-variant/70"], ["placeholder", "\u0E04\u0E49\u0E19\u0E2B\u0E32\u0E40\u0E21\u0E19\u0E39\u0E2D\u0E32\u0E2B\u0E32\u0E23...", "type", "text", 1, "w-full", "rounded-lg", "border-none", "bg-surface-container-low", "py-sm", "pl-xl", "pr-md", "font-body-md", "text-body-md", "text-on-surface", "placeholder:text-on-surface-variant/50", "transition-all", "focus:bg-surface-container", "focus:outline-none", "focus:ring-2", "focus:ring-primary/30"], [1, "flex", "shrink-0", "snap-x", "gap-xs", "overflow-x-auto", "pb-1"], ["type", "button", 1, "whitespace-nowrap", "rounded-full", "px-md", "py-xs", "font-label-md", "text-label-md", "snap-start", 3, "class"], [1, "mt-sm", "grid", "grid-cols-1", "gap-md", "md:grid-cols-2"], [1, "group", "flex", "cursor-pointer", "flex-col", "overflow-hidden", "rounded-xl", "transition-all", 3, "class"], ["type", "button", 1, "whitespace-nowrap", "rounded-full", "px-md", "py-xs", "font-label-md", "text-label-md", "snap-start"], [1, "group", "flex", "cursor-pointer", "flex-col", "overflow-hidden", "rounded-xl", "transition-all"], [1, "pointer-events-none", "absolute", "inset-0", "z-10", "rounded-xl", "ring-2", "ring-primary"], [1, "relative", "h-40", "w-full", "overflow-hidden"], [1, "h-full", "w-full", "object-cover", "transition-all", "duration-500", "group-hover:scale-105", 3, "alt", "src"], [1, "absolute", "right-sm", "top-sm", "flex", "items-center", "gap-1", "rounded-full", "bg-surface-container-lowest/90", "px-sm", "py-1", "shadow-sm", "backdrop-blur-sm"], [1, "h-2", "w-2", "rounded-full"], [1, "font-label-sm", "text-label-sm", "text-on-surface"], [1, "flex", "flex-1", "flex-col", "gap-xs", "bg-surface-container-lowest", "p-md"], [1, "flex", "items-start", "justify-between"], [1, "font-headline-sm", "text-headline-sm", "leading-tight", "text-on-surface"], [1, "mt-1", "block", "font-label-sm", "text-label-sm", "text-on-surface-variant"], [1, "font-headline-md", "text-headline-md", "font-bold", "text-primary"], [1, "mt-auto", "flex", "items-center", "justify-between", "pt-sm", "opacity-80"], [1, "flex", "items-center", "gap-1"], [1, "material-symbols-outlined", "text-[16px]", "text-tertiary"], [1, "font-label-sm", "text-label-sm", "text-on-surface-variant"], [1, "flex", "items-center", "gap-1", "text-[#22c55e]"], [1, "material-symbols-outlined", "text-[16px]"], [1, "font-label-sm", "text-label-sm", "font-bold"]], template: function MenuListComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵdomElementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2);
            i0.ɵɵtext(3, " \u0E40\u0E21\u0E19\u0E39\u0E41\u0E25\u0E30\u0E2A\u0E39\u0E15\u0E23\u0E2D\u0E32\u0E2B\u0E32\u0E23 ");
            i0.ɵɵdomElement(4, "span", 3);
            i0.ɵɵdomElementEnd();
            i0.ɵɵdomElementStart(5, "p", 4);
            i0.ɵɵtext(6, " \u0E08\u0E31\u0E14\u0E01\u0E32\u0E23\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23\u0E2D\u0E32\u0E2B\u0E32\u0E23 \u0E2A\u0E48\u0E27\u0E19\u0E1C\u0E2A\u0E21 (BOM) \u0E41\u0E25\u0E30\u0E27\u0E34\u0E40\u0E04\u0E23\u0E32\u0E30\u0E2B\u0E4C\u0E15\u0E49\u0E19\u0E17\u0E38\u0E19/\u0E01\u0E33\u0E44\u0E23 \u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E1B\u0E23\u0E30\u0E2A\u0E34\u0E17\u0E18\u0E34\u0E20\u0E32\u0E1E\u0E2A\u0E39\u0E07\u0E2A\u0E38\u0E14\u0E02\u0E2D\u0E07\u0E23\u0E49\u0E32\u0E19 ");
            i0.ɵɵdomElementEnd()();
            i0.ɵɵdomElementStart(7, "div", 5)(8, "button", 6)(9, "span", 7);
            i0.ɵɵtext(10, "category");
            i0.ɵɵdomElementEnd();
            i0.ɵɵtext(11, " \u0E08\u0E31\u0E14\u0E01\u0E32\u0E23\u0E2B\u0E21\u0E27\u0E14\u0E2B\u0E21\u0E39\u0E48 ");
            i0.ɵɵdomElementEnd();
            i0.ɵɵdomElementStart(12, "button", 8)(13, "span", 7);
            i0.ɵɵtext(14, "add");
            i0.ɵɵdomElementEnd();
            i0.ɵɵtext(15, " \u0E40\u0E1E\u0E34\u0E48\u0E21\u0E40\u0E21\u0E19\u0E39\u0E43\u0E2B\u0E21\u0E48 ");
            i0.ɵɵdomElementEnd()()();
            i0.ɵɵdomElementStart(16, "div", 9)(17, "div", 10)(18, "span", 11);
            i0.ɵɵtext(19, "search");
            i0.ɵɵdomElementEnd();
            i0.ɵɵdomElement(20, "input", 12);
            i0.ɵɵdomElementEnd();
            i0.ɵɵdomElementStart(21, "div", 13);
            i0.ɵɵrepeaterCreate(22, MenuListComponent_For_23_Template, 2, 3, "button", 14, _forTrack0);
            i0.ɵɵdomElementEnd()();
            i0.ɵɵdomElementStart(24, "div", 15);
            i0.ɵɵrepeaterCreate(25, MenuListComponent_For_26_Template, 28, 17, "article", 16, _forTrack1);
            i0.ɵɵdomElementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(22);
            i0.ɵɵrepeater(ctx.categories);
            i0.ɵɵadvance(3);
            i0.ɵɵrepeater(ctx.menuCards);
        } }, styles: ["[_nghost-%COMP%] {\n  display: block;\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MenuListComponent, [{
        type: Component,
        args: [{ selector: 'app-menu-list', standalone: true, template: "<div class=\"relative mb-xl flex flex-col gap-md md:flex-row md:items-center md:justify-between\">\n  <div class=\"flex-1\">\n    <h1 class=\"relative mb-xs inline-block font-headline-lg text-headline-lg text-primary\">\n      \u0E40\u0E21\u0E19\u0E39\u0E41\u0E25\u0E30\u0E2A\u0E39\u0E15\u0E23\u0E2D\u0E32\u0E2B\u0E32\u0E23\n      <span class=\"absolute -bottom-2 left-0 h-1 w-1/3 rounded-full bg-tertiary opacity-50\"></span>\n    </h1>\n    <p class=\"mt-sm max-w-2xl font-body-md text-body-md text-on-surface-variant\">\n      \u0E08\u0E31\u0E14\u0E01\u0E32\u0E23\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23\u0E2D\u0E32\u0E2B\u0E32\u0E23 \u0E2A\u0E48\u0E27\u0E19\u0E1C\u0E2A\u0E21 (BOM) \u0E41\u0E25\u0E30\u0E27\u0E34\u0E40\u0E04\u0E23\u0E32\u0E30\u0E2B\u0E4C\u0E15\u0E49\u0E19\u0E17\u0E38\u0E19/\u0E01\u0E33\u0E44\u0E23 \u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E1B\u0E23\u0E30\u0E2A\u0E34\u0E17\u0E18\u0E34\u0E20\u0E32\u0E1E\u0E2A\u0E39\u0E07\u0E2A\u0E38\u0E14\u0E02\u0E2D\u0E07\u0E23\u0E49\u0E32\u0E19\n    </p>\n  </div>\n\n  <div class=\"relative z-10 flex items-center gap-sm\">\n    <button class=\"flex -translate-y-0 items-center gap-xs rounded-full bg-surface-container px-md py-sm font-label-md text-label-md text-on-surface-variant shadow-sm transition-all hover:-translate-y-1 hover:bg-surface-container-high\" type=\"button\">\n      <span class=\"material-symbols-outlined text-[20px]\">category</span>\n      \u0E08\u0E31\u0E14\u0E01\u0E32\u0E23\u0E2B\u0E21\u0E27\u0E14\u0E2B\u0E21\u0E39\u0E48\n    </button>\n    <button class=\"flex -translate-y-0 items-center gap-xs rounded-full bg-primary px-md py-sm font-label-md text-label-md text-on-primary shadow-md transition-all hover:-translate-y-1 hover:bg-surface-tint\" type=\"button\">\n      <span class=\"material-symbols-outlined text-[20px]\">add</span>\n      \u0E40\u0E1E\u0E34\u0E48\u0E21\u0E40\u0E21\u0E19\u0E39\u0E43\u0E2B\u0E21\u0E48\n    </button>\n  </div>\n</div>\n\n<div class=\"sticky top-0 z-20 flex flex-wrap items-center gap-sm rounded-xl bg-surface-container-lowest p-sm shadow-sm\">\n  <div class=\"relative min-w-[200px] flex-1\">\n    <span class=\"material-symbols-outlined absolute left-sm top-1/2 -translate-y-1/2 text-[20px] text-on-surface-variant/70\">search</span>\n    <input\n      class=\"w-full rounded-lg border-none bg-surface-container-low py-sm pl-xl pr-md font-body-md text-body-md text-on-surface placeholder:text-on-surface-variant/50 transition-all focus:bg-surface-container focus:outline-none focus:ring-2 focus:ring-primary/30\"\n      placeholder=\"\u0E04\u0E49\u0E19\u0E2B\u0E32\u0E40\u0E21\u0E19\u0E39\u0E2D\u0E32\u0E2B\u0E32\u0E23...\"\n      type=\"text\"\n    />\n  </div>\n\n  <div class=\"flex shrink-0 snap-x gap-xs overflow-x-auto pb-1\">\n    @for (category of categories; track category.label) {\n      <button\n        class=\"whitespace-nowrap rounded-full px-md py-xs font-label-md text-label-md snap-start\"\n        [class]=\"category.active\n          ? 'bg-primary-container text-on-primary-container shadow-sm'\n          : 'bg-surface-container text-on-surface-variant transition-colors hover:bg-surface-container-high'\"\n        type=\"button\"\n      >\n        {{ category.label }}\n      </button>\n    }\n  </div>\n</div>\n\n<div class=\"mt-sm grid grid-cols-1 gap-md md:grid-cols-2\">\n  @for (card of menuCards; track card.name) {\n    <article\n      class=\"group flex cursor-pointer flex-col overflow-hidden rounded-xl transition-all\"\n      [class]=\"card.highlighted\n        ? 'relative bg-primary-fixed/20 shadow-md hover:-translate-y-1'\n        : 'bg-surface-container-lowest opacity-80 shadow-sm hover:-translate-y-1 hover:opacity-100 hover:shadow-md'\"\n    >\n      @if (card.highlighted) {\n        <div class=\"pointer-events-none absolute inset-0 z-10 rounded-xl ring-2 ring-primary\"></div>\n      }\n\n      <div class=\"relative h-40 w-full overflow-hidden\">\n        <img\n          [alt]=\"card.imageAlt\"\n          class=\"h-full w-full object-cover transition-all duration-500 group-hover:scale-105\"\n          [class.grayscale-\\[20\\%\\]]=\"card.grayscale\"\n          [class.group-hover\\:grayscale-0]=\"card.grayscale\"\n          [src]=\"card.imageUrl\"\n        />\n        <div class=\"absolute right-sm top-sm flex items-center gap-1 rounded-full bg-surface-container-lowest/90 px-sm py-1 shadow-sm backdrop-blur-sm\">\n          <span class=\"h-2 w-2 rounded-full\" [class]=\"card.statusDotClass\"></span>\n          <span class=\"font-label-sm text-label-sm text-on-surface\">{{ card.statusText }}</span>\n        </div>\n      </div>\n\n      <div class=\"flex flex-1 flex-col gap-xs bg-surface-container-lowest p-md\">\n        <div class=\"flex items-start justify-between\">\n          <div>\n            <h3 class=\"font-headline-sm text-headline-sm leading-tight text-on-surface\">{{ card.name }}</h3>\n            <span class=\"mt-1 block font-label-sm text-label-sm text-on-surface-variant\">{{ card.category }}</span>\n          </div>\n          <span class=\"font-headline-md text-headline-md font-bold text-primary\">{{ card.price }}</span>\n        </div>\n\n        <div class=\"mt-auto flex items-center justify-between pt-sm opacity-80\">\n          <div class=\"flex items-center gap-1\">\n            <span class=\"material-symbols-outlined text-[16px] text-tertiary\">inventory_2</span>\n            <span class=\"font-label-sm text-label-sm text-on-surface-variant\">{{ card.ingredientCount }}</span>\n          </div>\n          <div class=\"flex items-center gap-1 text-[#22c55e]\">\n            <span class=\"material-symbols-outlined text-[16px]\">trending_up</span>\n            <span class=\"font-label-sm text-label-sm font-bold\">{{ card.profitLabel }}</span>\n          </div>\n        </div>\n      </div>\n    </article>\n  }\n</div>\n", styles: [":host {\n  display: block;\n}\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(MenuListComponent, { className: "MenuListComponent", filePath: "src/app/components/menu-list/menu-list.component.ts", lineNumber: 24 }); })();
