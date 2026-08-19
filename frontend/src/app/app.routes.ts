import { Routes } from '@angular/router';
import { InventoryManagementPage } from './pages/inventory-management/inventory-management-page';
import { RecipesDashboardPage } from './pages/recipes-dashboard/recipes-dashboard-page';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'recipes-dashboard',
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
    path: '**',
    redirectTo: 'recipes-dashboard',
  },
];
