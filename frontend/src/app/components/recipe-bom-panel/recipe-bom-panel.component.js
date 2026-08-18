import { Component } from '@angular/core';
import * as i0 from "@angular/core";
const _forTrack0 = ($index, $item) => $item.name;
function RecipeBomPanelComponent_For_25_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵdomElementStart(0, "div", 16)(1, "div", 33)(2, "span", 34);
    i0.ɵɵtext(3);
    i0.ɵɵdomElementEnd();
    i0.ɵɵdomElementStart(4, "span", 10);
    i0.ɵɵtext(5);
    i0.ɵɵdomElementEnd()();
    i0.ɵɵdomElementStart(6, "div", 21)(7, "div", 28)(8, "span", 35);
    i0.ɵɵtext(9);
    i0.ɵɵdomElementEnd();
    i0.ɵɵdomElementStart(10, "span", 36);
    i0.ɵɵtext(11);
    i0.ɵɵdomElementEnd()();
    i0.ɵɵdomElementStart(12, "button", 37)(13, "span", 32);
    i0.ɵɵtext(14, "delete");
    i0.ɵɵdomElementEnd()()()();
} if (rf & 2) {
    const ingredient_r1 = ctx.$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ingredient_r1.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ingredient_r1.unitCostText);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ingredient_r1.amountText);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ingredient_r1.totalText);
} }
export class RecipeBomPanelComponent {
    ingredients = [
        {
            name: 'กุ้งแชบ๊วย (ตัวใหญ่)',
            unitCostText: 'ต้นทุน: ฿500/กก.',
            amountText: '150 กรัม',
            totalText: '฿75.00',
        },
        {
            name: 'เห็ดฟาง',
            unitCostText: 'ต้นทุน: ฿120/กก.',
            amountText: '50 กรัม',
            totalText: '฿6.00',
        },
        {
            name: 'น้ำพริกเผา',
            unitCostText: 'ต้นทุน: ฿80/กก.',
            amountText: '20 กรัม',
            totalText: '฿1.60',
        },
        {
            name: 'กะทิสด',
            unitCostText: 'ต้นทุน: ฿60/ลิตร',
            amountText: '50 มล.',
            totalText: '฿3.00',
        },
    ];
    static ɵfac = function RecipeBomPanelComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || RecipeBomPanelComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: RecipeBomPanelComponent, selectors: [["app-recipe-bom-panel"]], decls: 52, vars: 0, consts: [[1, "sticky", "top-md", "flex", "h-[calc(100vh-140px)]", "flex-col", "overflow-hidden", "rounded-2xl", "bg-surface-container-lowest", "shadow-xl"], [1, "relative", "bg-gradient-to-br", "from-primary/10", "to-transparent", "p-md"], [1, "mb-sm", "flex", "items-start", "justify-between"], [1, "font-headline-md", "text-headline-md", "text-on-surface"], ["type", "button", 1, "rounded-full", "p-1", "text-primary", "transition-colors", "hover:bg-primary/10"], [1, "material-symbols-outlined"], [1, "flex", "items-center", "gap-md"], [1, "h-16", "w-16", "shrink-0", "overflow-hidden", "rounded-lg", "shadow-sm"], ["alt", "A close-up thumbnail of classic Thai Tom Yum Goong, focusing on a bright red shrimp and herbal broth.", "src", "https://lh3.googleusercontent.com/aida-public/AB6AXuCiqoqLByMdQmA_hRuva_EK56h4rjHXVKjkuhZDg4brXFy4EY3rCvruAgfxw6amjTMUIPjlz1Bu-hdFqBbV08wjhY2qmKS2fSwNOJ03s6NfbIVFt4wCF7D6L1jdQbpXljDsbArX5mcdARfMxtIKreeqVBlPts0uUc9VH4cm8YRQksBbYLllUyyXwJ26zvyxlGqwJkd8KbhE6we7XFl-D523el6DR2uxadCLCaRY3pa4v0VepLInaM16Xw", 1, "h-full", "w-full", "object-cover"], [1, "font-headline-sm", "text-headline-sm", "text-on-surface"], [1, "font-label-sm", "text-label-sm", "text-on-surface-variant"], [1, "relative", "flex", "flex-1", "flex-col", "gap-sm", "overflow-y-auto", "p-md"], [1, "mb-xs", "flex", "items-center", "justify-between"], [1, "font-label-md", "text-label-md", "font-bold", "text-on-surface-variant"], ["type", "button", 1, "flex", "items-center", "gap-1", "text-sm", "text-tertiary", "hover:underline"], [1, "material-symbols-outlined", "text-[16px]"], [1, "group", "flex", "items-center", "justify-between", "rounded-lg", "bg-surface-container-low", "p-sm", "transition-colors", "hover:bg-surface-container"], [1, "h-4"], [1, "flex", "flex-col", "gap-sm", "border-t", "border-outline-variant/30", "bg-surface-container", "p-md"], [1, "flex", "items-center", "justify-between"], [1, "font-body-md", "text-body-md", "text-on-surface-variant"], [1, "flex", "items-center", "gap-sm"], [1, "relative", "flex-1"], [1, "absolute", "-top-2", "left-2", "bg-surface-container", "px-1", "text-[10px]", "font-label-sm", "text-label-sm", "text-primary"], ["type", "text", "value", "250", 1, "w-full", "rounded-lg", "border", "border-primary/40", "bg-surface-container-lowest", "px-md", "py-sm", "text-right", "font-headline-sm", "text-headline-sm", "text-on-surface", "shadow-inner", "focus:border-primary", "focus:outline-none", "focus:ring-1", "focus:ring-primary"], [1, "font-body-md", "text-on-surface-variant"], [1, "mt-xs", "flex", "items-center", "justify-between", "rounded-lg", "border", "border-primary/20", "bg-primary/10", "p-sm"], [1, "font-label-md", "text-label-md", "font-bold", "text-on-surface"], [1, "text-right"], [1, "block", "font-headline-sm", "text-headline-sm", "leading-none", "text-[#22c55e]"], [1, "font-label-sm", "text-label-sm", "text-[#22c55e]", "opacity-80"], ["type", "button", 1, "mt-sm", "flex", "w-full", "items-center", "justify-center", "gap-xs", "rounded-lg", "bg-primary", "py-sm", "font-label-md", "text-label-md", "font-bold", "text-on-primary", "shadow-md", "transition-colors", "hover:bg-surface-tint"], [1, "material-symbols-outlined", "text-[20px]"], [1, "flex", "flex-col"], [1, "font-body-md", "text-body-md", "text-on-surface"], [1, "block", "font-body-md", "text-body-md", "text-on-surface"], [1, "block", "font-label-sm", "text-label-sm", "text-primary"], ["type", "button", 1, "text-on-surface-variant/50", "opacity-0", "transition-opacity", "hover:text-error", "group-hover:opacity-100"]], template: function RecipeBomPanelComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵdomElementStart(0, "aside", 0)(1, "div", 1)(2, "div", 2)(3, "h2", 3);
            i0.ɵɵtext(4, "\u0E2A\u0E39\u0E15\u0E23\u0E2D\u0E32\u0E2B\u0E32\u0E23 (BOM)");
            i0.ɵɵdomElementEnd();
            i0.ɵɵdomElementStart(5, "button", 4)(6, "span", 5);
            i0.ɵɵtext(7, "edit");
            i0.ɵɵdomElementEnd()()();
            i0.ɵɵdomElementStart(8, "div", 6)(9, "div", 7);
            i0.ɵɵdomElement(10, "img", 8);
            i0.ɵɵdomElementEnd();
            i0.ɵɵdomElementStart(11, "div")(12, "h3", 9);
            i0.ɵɵtext(13, "\u0E15\u0E49\u0E21\u0E22\u0E33\u0E01\u0E38\u0E49\u0E07\u0E19\u0E49\u0E33\u0E02\u0E49\u0E19");
            i0.ɵɵdomElementEnd();
            i0.ɵɵdomElementStart(14, "p", 10);
            i0.ɵɵtext(15, "\u0E2A\u0E39\u0E15\u0E23\u0E21\u0E32\u0E15\u0E23\u0E10\u0E32\u0E19 (1 \u0E17\u0E35\u0E48)");
            i0.ɵɵdomElementEnd()()()();
            i0.ɵɵdomElementStart(16, "div", 11)(17, "div", 12)(18, "span", 13);
            i0.ɵɵtext(19, "\u0E27\u0E31\u0E15\u0E16\u0E38\u0E14\u0E34\u0E1A\u0E17\u0E35\u0E48\u0E43\u0E0A\u0E49");
            i0.ɵɵdomElementEnd();
            i0.ɵɵdomElementStart(20, "button", 14)(21, "span", 15);
            i0.ɵɵtext(22, "add_circle");
            i0.ɵɵdomElementEnd();
            i0.ɵɵtext(23, " \u0E40\u0E1E\u0E34\u0E48\u0E21\u0E27\u0E31\u0E15\u0E16\u0E38\u0E14\u0E34\u0E1A ");
            i0.ɵɵdomElementEnd()();
            i0.ɵɵrepeaterCreate(24, RecipeBomPanelComponent_For_25_Template, 15, 4, "div", 16, _forTrack0);
            i0.ɵɵdomElement(26, "div", 17);
            i0.ɵɵdomElementEnd();
            i0.ɵɵdomElementStart(27, "div", 18)(28, "div", 19)(29, "span", 20);
            i0.ɵɵtext(30, "\u0E15\u0E49\u0E19\u0E17\u0E38\u0E19\u0E23\u0E27\u0E21\u0E15\u0E48\u0E2D\u0E08\u0E32\u0E19");
            i0.ɵɵdomElementEnd();
            i0.ɵɵdomElementStart(31, "span", 9);
            i0.ɵɵtext(32, "\u0E3F85.60");
            i0.ɵɵdomElementEnd()();
            i0.ɵɵdomElementStart(33, "div", 21)(34, "div", 22)(35, "label", 23);
            i0.ɵɵtext(36, " \u0E23\u0E32\u0E04\u0E32\u0E02\u0E32\u0E22 ");
            i0.ɵɵdomElementEnd();
            i0.ɵɵdomElement(37, "input", 24);
            i0.ɵɵdomElementEnd();
            i0.ɵɵdomElementStart(38, "span", 25);
            i0.ɵɵtext(39, "\u0E1A\u0E32\u0E17");
            i0.ɵɵdomElementEnd()();
            i0.ɵɵdomElementStart(40, "div", 26)(41, "span", 27);
            i0.ɵɵtext(42, "\u0E01\u0E33\u0E44\u0E23\u0E2A\u0E38\u0E17\u0E18\u0E34\u0E04\u0E32\u0E14\u0E01\u0E32\u0E23\u0E13\u0E4C");
            i0.ɵɵdomElementEnd();
            i0.ɵɵdomElementStart(43, "div", 28)(44, "span", 29);
            i0.ɵɵtext(45, "\u0E3F164.40");
            i0.ɵɵdomElementEnd();
            i0.ɵɵdomElementStart(46, "span", 30);
            i0.ɵɵtext(47, "(65.7%)");
            i0.ɵɵdomElementEnd()()();
            i0.ɵɵdomElementStart(48, "button", 31)(49, "span", 32);
            i0.ɵɵtext(50, "save");
            i0.ɵɵdomElementEnd();
            i0.ɵɵtext(51, " \u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01\u0E2A\u0E39\u0E15\u0E23\u0E2D\u0E32\u0E2B\u0E32\u0E23 ");
            i0.ɵɵdomElementEnd()()();
        } if (rf & 2) {
            i0.ɵɵadvance(24);
            i0.ɵɵrepeater(ctx.ingredients);
        } }, styles: ["[_nghost-%COMP%] {\n  display: block;\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RecipeBomPanelComponent, [{
        type: Component,
        args: [{ selector: 'app-recipe-bom-panel', standalone: true, template: "<aside class=\"sticky top-md flex h-[calc(100vh-140px)] flex-col overflow-hidden rounded-2xl bg-surface-container-lowest shadow-xl\">\n  <div class=\"relative bg-gradient-to-br from-primary/10 to-transparent p-md\">\n    <div class=\"mb-sm flex items-start justify-between\">\n      <h2 class=\"font-headline-md text-headline-md text-on-surface\">\u0E2A\u0E39\u0E15\u0E23\u0E2D\u0E32\u0E2B\u0E32\u0E23 (BOM)</h2>\n      <button class=\"rounded-full p-1 text-primary transition-colors hover:bg-primary/10\" type=\"button\">\n        <span class=\"material-symbols-outlined\">edit</span>\n      </button>\n    </div>\n\n    <div class=\"flex items-center gap-md\">\n      <div class=\"h-16 w-16 shrink-0 overflow-hidden rounded-lg shadow-sm\">\n        <img\n          alt=\"A close-up thumbnail of classic Thai Tom Yum Goong, focusing on a bright red shrimp and herbal broth.\"\n          class=\"h-full w-full object-cover\"\n          src=\"https://lh3.googleusercontent.com/aida-public/AB6AXuCiqoqLByMdQmA_hRuva_EK56h4rjHXVKjkuhZDg4brXFy4EY3rCvruAgfxw6amjTMUIPjlz1Bu-hdFqBbV08wjhY2qmKS2fSwNOJ03s6NfbIVFt4wCF7D6L1jdQbpXljDsbArX5mcdARfMxtIKreeqVBlPts0uUc9VH4cm8YRQksBbYLllUyyXwJ26zvyxlGqwJkd8KbhE6we7XFl-D523el6DR2uxadCLCaRY3pa4v0VepLInaM16Xw\"\n        />\n      </div>\n      <div>\n        <h3 class=\"font-headline-sm text-headline-sm text-on-surface\">\u0E15\u0E49\u0E21\u0E22\u0E33\u0E01\u0E38\u0E49\u0E07\u0E19\u0E49\u0E33\u0E02\u0E49\u0E19</h3>\n        <p class=\"font-label-sm text-label-sm text-on-surface-variant\">\u0E2A\u0E39\u0E15\u0E23\u0E21\u0E32\u0E15\u0E23\u0E10\u0E32\u0E19 (1 \u0E17\u0E35\u0E48)</p>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"relative flex flex-1 flex-col gap-sm overflow-y-auto p-md\">\n    <div class=\"mb-xs flex items-center justify-between\">\n      <span class=\"font-label-md text-label-md font-bold text-on-surface-variant\">\u0E27\u0E31\u0E15\u0E16\u0E38\u0E14\u0E34\u0E1A\u0E17\u0E35\u0E48\u0E43\u0E0A\u0E49</span>\n      <button class=\"flex items-center gap-1 text-sm text-tertiary hover:underline\" type=\"button\">\n        <span class=\"material-symbols-outlined text-[16px]\">add_circle</span>\n        \u0E40\u0E1E\u0E34\u0E48\u0E21\u0E27\u0E31\u0E15\u0E16\u0E38\u0E14\u0E34\u0E1A\n      </button>\n    </div>\n\n    @for (ingredient of ingredients; track ingredient.name) {\n      <div class=\"group flex items-center justify-between rounded-lg bg-surface-container-low p-sm transition-colors hover:bg-surface-container\">\n        <div class=\"flex flex-col\">\n          <span class=\"font-body-md text-body-md text-on-surface\">{{ ingredient.name }}</span>\n          <span class=\"font-label-sm text-label-sm text-on-surface-variant\">{{ ingredient.unitCostText }}</span>\n        </div>\n        <div class=\"flex items-center gap-sm\">\n          <div class=\"text-right\">\n            <span class=\"block font-body-md text-body-md text-on-surface\">{{ ingredient.amountText }}</span>\n            <span class=\"block font-label-sm text-label-sm text-primary\">{{ ingredient.totalText }}</span>\n          </div>\n          <button class=\"text-on-surface-variant/50 opacity-0 transition-opacity hover:text-error group-hover:opacity-100\" type=\"button\">\n            <span class=\"material-symbols-outlined text-[20px]\">delete</span>\n          </button>\n        </div>\n      </div>\n    }\n\n    <div class=\"h-4\"></div>\n  </div>\n\n  <div class=\"flex flex-col gap-sm border-t border-outline-variant/30 bg-surface-container p-md\">\n    <div class=\"flex items-center justify-between\">\n      <span class=\"font-body-md text-body-md text-on-surface-variant\">\u0E15\u0E49\u0E19\u0E17\u0E38\u0E19\u0E23\u0E27\u0E21\u0E15\u0E48\u0E2D\u0E08\u0E32\u0E19</span>\n      <span class=\"font-headline-sm text-headline-sm text-on-surface\">\u0E3F85.60</span>\n    </div>\n\n    <div class=\"flex items-center gap-sm\">\n      <div class=\"relative flex-1\">\n        <label class=\"absolute -top-2 left-2 bg-surface-container px-1 text-[10px] font-label-sm text-label-sm text-primary\">\n          \u0E23\u0E32\u0E04\u0E32\u0E02\u0E32\u0E22\n        </label>\n        <input\n          class=\"w-full rounded-lg border border-primary/40 bg-surface-container-lowest px-md py-sm text-right font-headline-sm text-headline-sm text-on-surface shadow-inner focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary\"\n          type=\"text\"\n          value=\"250\"\n        />\n      </div>\n      <span class=\"font-body-md text-on-surface-variant\">\u0E1A\u0E32\u0E17</span>\n    </div>\n\n    <div class=\"mt-xs flex items-center justify-between rounded-lg border border-primary/20 bg-primary/10 p-sm\">\n      <span class=\"font-label-md text-label-md font-bold text-on-surface\">\u0E01\u0E33\u0E44\u0E23\u0E2A\u0E38\u0E17\u0E18\u0E34\u0E04\u0E32\u0E14\u0E01\u0E32\u0E23\u0E13\u0E4C</span>\n      <div class=\"text-right\">\n        <span class=\"block font-headline-sm text-headline-sm leading-none text-[#22c55e]\">\u0E3F164.40</span>\n        <span class=\"font-label-sm text-label-sm text-[#22c55e] opacity-80\">(65.7%)</span>\n      </div>\n    </div>\n\n    <button class=\"mt-sm flex w-full items-center justify-center gap-xs rounded-lg bg-primary py-sm font-label-md text-label-md font-bold text-on-primary shadow-md transition-colors hover:bg-surface-tint\" type=\"button\">\n      <span class=\"material-symbols-outlined text-[20px]\">save</span>\n      \u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01\u0E2A\u0E39\u0E15\u0E23\u0E2D\u0E32\u0E2B\u0E32\u0E23\n    </button>\n  </div>\n</aside>\n", styles: [":host {\n  display: block;\n}\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(RecipeBomPanelComponent, { className: "RecipeBomPanelComponent", filePath: "src/app/components/recipe-bom-panel/recipe-bom-panel.component.ts", lineNumber: 16 }); })();
