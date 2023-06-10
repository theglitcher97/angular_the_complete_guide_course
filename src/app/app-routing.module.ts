import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipesComponent } from './recipe-book/recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeDetailsComponent } from './recipe-book/recipe-list/recipe-details/recipe-details.component';
import { SelectRecipeComponent } from './recipe-book/recipe-list/select-recipe/select-recipe.component';

const appRoutes: Routes = [
  {
    path: 'recipe',
    component: RecipesComponent,
    children: [
      { path: '', component: SelectRecipeComponent },
      { path: ':id', component: RecipeDetailsComponent },
      { path: '**', redirectTo: '/recipe', pathMatch: 'full' },
    ],
  },
  { path: 'shopping-list', component: ShoppingListComponent },
  { path: '**', redirectTo: '/recipe', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
