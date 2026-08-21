import { Routes } from '@angular/router';
import { InventoryManagementPage } from './pages/inventory-management/inventory-management-page';
import { MenuListPage } from './pages/menu-list/menu-list-page';
import { RecipesDashboardPage } from './pages/recipes-dashboard/recipes-dashboard-page';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'menu-list',
  },
  {
    path: 'inventory-management',
    component: InventoryManagementPage,
  },
  {
    path: 'recipes-dashboard',
    component: RecipesDashboardPage,
  },
  {
    path: 'menu-list',
    component: MenuListPage,
  },
  {
    path: '**',
    redirectTo: 'menu-list',
  },
];
