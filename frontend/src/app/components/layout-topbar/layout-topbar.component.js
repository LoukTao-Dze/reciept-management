import { Component } from '@angular/core';
import * as i0 from "@angular/core";
export class LayoutTopbarComponent {
    static ɵfac = function LayoutTopbarComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || LayoutTopbarComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: LayoutTopbarComponent, selectors: [["app-layout-topbar"]], decls: 13, vars: 0, consts: [[1, "fixed", "left-72", "right-0", "top-0", "z-40", "flex", "h-20", "items-center", "justify-between", "bg-surface/80", "px-margin-desktop", "shadow-[0_1px_8px_rgba(253,121,121,0.08)]", "backdrop-blur-xl"], [1, "flex", "items-center", "gap-md", "rounded-full", "border", "border-outline-variant", "bg-surface-container", "px-md", "py-xs"], [1, "material-symbols-outlined", "text-on-surface-variant"], ["placeholder", "\u0E04\u0E49\u0E19\u0E2B\u0E32...", "type", "text", 1, "w-64", "border-none", "bg-transparent", "text-sm", "text-on-surface", "outline-none"], [1, "flex", "items-center", "gap-lg"], ["type", "button", 1, "relative", "text-on-surface-variant", "transition-colors", "hover:text-primary"], [1, "material-symbols-outlined"], [1, "absolute", "right-0", "top-0", "h-2", "w-2", "rounded-full", "bg-error"], ["type", "button", 1, "text-on-surface-variant", "transition-colors", "hover:text-primary"]], template: function LayoutTopbarComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵdomElementStart(0, "header", 0)(1, "div", 1)(2, "span", 2);
            i0.ɵɵtext(3, "search");
            i0.ɵɵdomElementEnd();
            i0.ɵɵdomElement(4, "input", 3);
            i0.ɵɵdomElementEnd();
            i0.ɵɵdomElementStart(5, "div", 4)(6, "button", 5)(7, "span", 6);
            i0.ɵɵtext(8, "notifications");
            i0.ɵɵdomElementEnd();
            i0.ɵɵdomElement(9, "span", 7);
            i0.ɵɵdomElementEnd();
            i0.ɵɵdomElementStart(10, "button", 8)(11, "span", 6);
            i0.ɵɵtext(12, "settings");
            i0.ɵɵdomElementEnd()()()();
        } }, styles: ["[_nghost-%COMP%] {\n  display: block;\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LayoutTopbarComponent, [{
        type: Component,
        args: [{ selector: 'app-layout-topbar', standalone: true, template: "<header class=\"fixed left-72 right-0 top-0 z-40 flex h-20 items-center justify-between bg-surface/80 px-margin-desktop shadow-[0_1px_8px_rgba(253,121,121,0.08)] backdrop-blur-xl\">\n  <div class=\"flex items-center gap-md rounded-full border border-outline-variant bg-surface-container px-md py-xs\">\n    <span class=\"material-symbols-outlined text-on-surface-variant\">search</span>\n    <input class=\"w-64 border-none bg-transparent text-sm text-on-surface outline-none\" placeholder=\"\u0E04\u0E49\u0E19\u0E2B\u0E32...\" type=\"text\" />\n  </div>\n\n  <div class=\"flex items-center gap-lg\">\n    <button class=\"relative text-on-surface-variant transition-colors hover:text-primary\" type=\"button\">\n      <span class=\"material-symbols-outlined\">notifications</span>\n      <span class=\"absolute right-0 top-0 h-2 w-2 rounded-full bg-error\"></span>\n    </button>\n    <button class=\"text-on-surface-variant transition-colors hover:text-primary\" type=\"button\">\n      <span class=\"material-symbols-outlined\">settings</span>\n    </button>\n  </div>\n</header>\n", styles: [":host {\n  display: block;\n}\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(LayoutTopbarComponent, { className: "LayoutTopbarComponent", filePath: "src/app/components/layout-topbar/layout-topbar.component.ts", lineNumber: 9 }); })();
