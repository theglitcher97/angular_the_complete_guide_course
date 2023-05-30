import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/models/ingredient';
import { ShoppingListService } from './services/shopping.list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  public ingredients!: Ingredient[];

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredientsList();
    this.shoppingListService.newIngredientsAdded.subscribe(
      (ingredients) => (this.ingredients = ingredients)
    );
  }
}
