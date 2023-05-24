import { Component } from '@angular/core';
import { Ingredient } from '../shared/models/ingredient';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent {
  public ingredients: Ingredient[] = [
    new Ingredient('Fish', 1),
    new Ingredient('Tomatos', 3),
  ];

  onAddNewIngredients(newIngredients: Ingredient) {
    this.ingredients.push(newIngredients);
  }
}
