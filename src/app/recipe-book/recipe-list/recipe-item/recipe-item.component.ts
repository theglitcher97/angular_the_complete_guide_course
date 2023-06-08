import { Component, Input } from '@angular/core';
import { Recipe } from '../../models/recipe';
import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent {
  @Input() recipe!: Recipe;
  @Input() index!: number;

  constructor(private recipeService: RecipeService) {}

  onRecipeSelected() {
    this.recipeService.setValueToSelectedRecipeEvent(this.recipe);
  }
}
