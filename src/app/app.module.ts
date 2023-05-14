import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { EditShoppingListComponent } from './shopping-list/edit-shopping-list/edit-shopping-list.component';
import { RecipeListComponent } from './recipe-book/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipe-book/recipe-list/recipe-item/recipe-item.component';
import { RecipeDetailsComponent } from './recipe-book/recipe-list/recipe-details/recipe-details.component';
import {HeaderComponent} from "./header-component/header.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    EditShoppingListComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
