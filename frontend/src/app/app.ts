import { Component } from '@angular/core';
import { RecipesDashboardPage } from './pages/recipes-dashboard/recipes-dashboard-page';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RecipesDashboardPage],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
