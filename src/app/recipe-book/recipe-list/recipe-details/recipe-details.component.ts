import { Component, Input } from '@angular/core';
import { Recipe } from '../../models/recipe';
import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css'],
})
export class RecipeDetailsComponent {
  @Input() recipe!: Recipe;

  constructor(private recipeService: RecipeService) {}

  onAddToShoppingList() {
    if (this.recipe.ingredients)
      this.recipeService.addIngredientsToRecipe(this.recipe.ingredients);
  }
}
