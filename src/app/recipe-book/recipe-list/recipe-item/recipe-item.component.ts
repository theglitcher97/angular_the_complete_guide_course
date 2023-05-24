import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recipe } from '../../models/recipe';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent {
  @Input() recipe!: Recipe;
  @Output() recipeSelectedEvent: EventEmitter<Recipe> =
    new EventEmitter<Recipe>();

  onRecipeSelected() {
    this.recipeSelectedEvent.emit(this.recipe);
  }
}
