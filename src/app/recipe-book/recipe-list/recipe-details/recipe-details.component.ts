import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../models/recipe';
import { RecipeService } from '../../services/recipe.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css'],
})
export class RecipeDetailsComponent implements OnInit {
  recipe!: Recipe | undefined;

  constructor(
    private recipeService: RecipeService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      const recipeIndex = +params['id'];
      if (recipeIndex !== undefined) {
        this.recipe = this.recipeService.getRecipe(recipeIndex);
      }
    });
  }

  onAddToShoppingList() {
    if (this.recipe?.ingredients)
      this.recipeService.addIngredientsToRecipe(this.recipe.ingredients);
  }
}
