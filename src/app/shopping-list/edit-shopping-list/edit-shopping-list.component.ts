import { Component, ElementRef, ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/models/ingredient';
import { ShoppingListService } from '../services/shopping.list.service';

@Component({
  selector: 'app-edit-shopping-list',
  templateUrl: './edit-shopping-list.component.html',
  styleUrls: ['./edit-shopping-list.component.css'],
})
export class EditShoppingListComponent {
  @ViewChild('nameInput') nameInput!: ElementRef;
  @ViewChild('amountInput') amountInput!: ElementRef;

  constructor(private shoppingListService: ShoppingListService) {}

  onAddIngredients() {
    let name = this.nameInput.nativeElement.value;
    let amount = this.amountInput.nativeElement.value;

    if (name.trim().length === 0) return;
    if (amount <= 0) return;
    this.shoppingListService.addIngredient(new Ingredient(name, amount));

    // reset the form
    this.nameInput.nativeElement.value = '';
    this.amountInput.nativeElement.value = '';
  }
}
