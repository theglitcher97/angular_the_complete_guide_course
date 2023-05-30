import { Recipe } from '../models/recipe';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../../shared/models/ingredient';
import { ShoppingListService } from '../../shopping-list/services/shopping.list.service';

@Injectable()
export class RecipeService {
  private recipeSelected: EventEmitter<Recipe> = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'Fried fish with rice',
      "Cartagena's food",
      'https://mobile.eatyourworld.com/images/staff_food_entries/arroz-con-coco.jpg',
      [new Ingredient('rice', 1), new Ingredient('Coconut', 1)]
    ),
    new Recipe(
      'Chopped Salad',
      'A good chopped salad is a buoyant mix of different textures (creamy, crisp, crunchy, juicy)',
      'https://static01.nyt.com/images/2022/07/15/dining/MC-Chopped-Salad-15SALADREX/merlin_209652387_1b5eee4c-9da5-443c-90e0-db20ee51a246-threeByTwoMediumAt2X.jpg',
      [
        new Ingredient('cherry', 4),
        new Ingredient('egg', 2),
        new Ingredient('pickle', 1),
      ]
    ),
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  public getRecipes() {
    return [...this.recipes];
  }

  public setValueToSelectedRecipeEvent(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }

  public getRecipeSelectedEvent() {
    return this.recipeSelected;
  }

  public addIngredientsToRecipe(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
