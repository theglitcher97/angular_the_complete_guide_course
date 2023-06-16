import {Ingredient} from '../../shared/models/ingredient';
import {Injectable} from '@angular/core';
import {Subject} from "rxjs";

@Injectable({providedIn: 'root'})
export class ShoppingListService {
  public newIngredientsAdded: Subject<Ingredient[]> = new Subject<Ingredient[]>();
  private ingredients: Ingredient[] = [
    new Ingredient('Fish', 1),
    new Ingredient('Tomatoes', 3),
  ];

  public getIngredientsList() {
    return this.ingredients;
  }

  public addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.newIngredientsAdded.next([...this.ingredients]);
  }

  public addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.newIngredientsAdded.next([...this.ingredients]);
  }
}
