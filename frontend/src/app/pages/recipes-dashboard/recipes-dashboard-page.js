import { Component } from '@angular/core';
import { LayoutSidebarComponent } from '../../components/layout-sidebar/layout-sidebar.component';
import { LayoutTopbarComponent } from '../../components/layout-topbar/layout-topbar.component';
import { MenuListComponent } from '../../components/menu-list/menu-list.component';
import { RecipeBomPanelComponent } from '../../components/recipe-bom-panel/recipe-bom-panel.component';
import * as i0 from "@angular/core";
export class RecipesDashboardPage {
    static ɵfac = function RecipesDashboardPage_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || RecipesDashboardPage)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: RecipesDashboardPage, selectors: [["app-recipes-dashboard-page"]], decls: 9, vars: 0, consts: [[1, "pl-72"], [1, "relative", "min-h-screen", "bg-surface", "pt-20"], [1, "flex", "h-full", "w-full", "flex-col", "overflow-y-auto", "p-lg"], [1, "grid", "flex-1", "grid-cols-1", "items-start", "gap-gutter", "lg:grid-cols-12"], [1, "flex", "h-full", "flex-col", "gap-md", "lg:col-span-8"], [1, "lg:col-span-4"]], template: function RecipesDashboardPage_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelement(0, "app-layout-sidebar");
            i0.ɵɵelementStart(1, "div", 0);
            i0.ɵɵelement(2, "app-layout-topbar");
            i0.ɵɵelementStart(3, "main", 1)(4, "div", 2)(5, "div", 3)(6, "div", 4);
            i0.ɵɵelement(7, "app-menu-list");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(8, "app-recipe-bom-panel", 5);
            i0.ɵɵelementEnd()()()();
        } }, dependencies: [LayoutSidebarComponent,
            LayoutTopbarComponent,
            MenuListComponent,
            RecipeBomPanelComponent], styles: ["[_nghost-%COMP%] {\n  display: block;\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RecipesDashboardPage, [{
        type: Component,
        args: [{ selector: 'app-recipes-dashboard-page', standalone: true, imports: [
                    LayoutSidebarComponent,
                    LayoutTopbarComponent,
                    MenuListComponent,
                    RecipeBomPanelComponent,
                ], template: "<app-layout-sidebar></app-layout-sidebar>\n\n<div class=\"pl-72\">\n  <app-layout-topbar></app-layout-topbar>\n\n  <main class=\"relative min-h-screen bg-surface pt-20\">\n    <div class=\"flex h-full w-full flex-col overflow-y-auto p-lg\">\n      <div class=\"grid flex-1 grid-cols-1 items-start gap-gutter lg:grid-cols-12\">\n        <div class=\"flex h-full flex-col gap-md lg:col-span-8\">\n          <app-menu-list></app-menu-list>\n        </div>\n\n        <app-recipe-bom-panel class=\"lg:col-span-4\"></app-recipe-bom-panel>\n      </div>\n    </div>\n  </main>\n</div>\n", styles: [":host {\n  display: block;\n}\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(RecipesDashboardPage, { className: "RecipesDashboardPage", filePath: "src/app/pages/recipes-dashboard/recipes-dashboard-page.ts", lineNumber: 19 }); })();
