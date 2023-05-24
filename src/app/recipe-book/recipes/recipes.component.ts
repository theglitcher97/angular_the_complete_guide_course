import { Component } from '@angular/core';
import { Recipe } from '../models/recipe';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
})
export class RecipesComponent {
  public recipeSelected!: Recipe;

  onRecipeSelected(recipeSelected: Recipe) {
    this.recipeSelected = recipeSelected;
  }
}
