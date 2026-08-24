import { Component, output } from '@angular/core';

@Component({
  selector: 'app-inventory-header',
  standalone: true,
  templateUrl: './inventory-header.component.html',
  styleUrl: './inventory-header.component.scss',
})
export class InventoryHeaderComponent {
  readonly addIngredientClick = output<void>();
}
