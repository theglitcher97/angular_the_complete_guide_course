import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../models/recipe';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent {
  @Output() recipeSelectedEvent: EventEmitter<Recipe> =
    new EventEmitter<Recipe>();

  public recipes: Recipe[] = [
    new Recipe(
      'Fried fish with rice',
      "Cartagena's food",
      'https://mobile.eatyourworld.com/images/staff_food_entries/arroz-con-coco.jpg'
    ),
    new Recipe(
      'Chopped Salad',
      'A good chopped salad is a buoyant mix of different textures (creamy, crisp, crunchy, juicy)',
      'https://static01.nyt.com/images/2022/07/15/dining/MC-Chopped-Salad-15SALADREX/merlin_209652387_1b5eee4c-9da5-443c-90e0-db20ee51a246-threeByTwoMediumAt2X.jpg'
    ),
  ];

  onRecipeSelected(recipeSelected: Recipe) {
    this.recipeSelectedEvent.emit(recipeSelected);
  }
}
