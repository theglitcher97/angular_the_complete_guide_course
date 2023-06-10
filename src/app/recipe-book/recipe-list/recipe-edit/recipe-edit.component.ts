import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Recipe } from '../../models/recipe';
import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css'],
})
export class RecipeEditComponent implements OnInit {
  public recipe!: Recipe;
  public isEditMode!: boolean;

  constructor(
    private activatedRoute: ActivatedRoute,
    private recipeService: RecipeService
  ) {
    this.isEditMode = false;
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      const foundRecipe = this.recipeService.getRecipe(+params['id']);
      if (foundRecipe) {
        this.recipe = foundRecipe;
        this.isEditMode = true;
      }
    });
  }
}
