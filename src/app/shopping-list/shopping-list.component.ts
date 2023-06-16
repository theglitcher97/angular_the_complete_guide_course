import {Component, OnDestroy, OnInit} from '@angular/core';
import {Ingredient} from '../shared/models/ingredient';
import {ShoppingListService} from './services/shopping.list.service';
import {Subscription} from "rxjs";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  public ingredients!: Ingredient[];
  private subscriptions: Subscription = new Subscription();

  constructor(private shoppingListService: ShoppingListService) {
  }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredientsList();
    this.subscriptions.add(
      this.shoppingListService.newIngredientsAdded.subscribe(
        (ingredients) => (this.ingredients = ingredients)
      ))
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
