import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LayoutSidebarComponent } from '../../components/layout-sidebar/layout-sidebar.component';
import { LayoutTopbarComponent } from '../../components/layout-topbar/layout-topbar.component';
import { MenuListComponent } from '../../components/menu-list/menu-list.component';
import { RecipeBomPanelComponent } from '../../components/recipe-bom-panel/recipe-bom-panel.component';
import * as i0 from "@angular/core";
export class RecipesDashboardComponentsModule {
    static ɵfac = function RecipesDashboardComponentsModule_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || RecipesDashboardComponentsModule)(); };
    static ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: RecipesDashboardComponentsModule });
    static ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [CommonModule] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RecipesDashboardComponentsModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    LayoutSidebarComponent,
                    LayoutTopbarComponent,
                    MenuListComponent,
                    RecipeBomPanelComponent,
                ],
                exports: [
                    LayoutSidebarComponent,
                    LayoutTopbarComponent,
                    MenuListComponent,
                    RecipeBomPanelComponent,
                ],
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(RecipesDashboardComponentsModule, { imports: [CommonModule,
        LayoutSidebarComponent,
        LayoutTopbarComponent,
        MenuListComponent,
        RecipeBomPanelComponent], exports: [LayoutSidebarComponent,
        LayoutTopbarComponent,
        MenuListComponent,
        RecipeBomPanelComponent] }); })();
