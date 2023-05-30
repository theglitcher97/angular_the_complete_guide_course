import { Component, OnInit } from '@angular/core';
import { Recipe } from '../models/recipe';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService],
})
export class RecipesComponent implements OnInit {
  public recipeSelected!: Recipe;

  constructor(private recipeService: RecipeService) {}

  ngOnInit() {
    this.recipeService
      .getRecipeSelectedEvent()
      .subscribe((recipe: Recipe) => (this.recipeSelected = recipe));
  }
}
