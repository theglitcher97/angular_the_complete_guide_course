import { Ingredient } from '../../shared/models/ingredient';
import { EventEmitter, Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ShoppingListService {
  public newIngredientsAdded: EventEmitter<Ingredient[]> = new EventEmitter<
    Ingredient[]
  >();
  private ingredients: Ingredient[] = [
    new Ingredient('Fish', 1),
    new Ingredient('Tomatoes', 3),
  ];

  public getIngredientsList() {
    return this.ingredients;
  }

  public addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.newIngredientsAdded.emit([...this.ingredients]);
  }

  public addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.newIngredientsAdded.emit([...this.ingredients]);
  }
}
