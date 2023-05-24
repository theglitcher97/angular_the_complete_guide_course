import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import { Ingredient } from '../../shared/models/ingredient';

@Component({
  selector: 'app-edit-shopping-list',
  templateUrl: './edit-shopping-list.component.html',
  styleUrls: ['./edit-shopping-list.component.css'],
})
export class EditShoppingListComponent {
  @ViewChild('nameInput') nameInput!: ElementRef;
  @ViewChild('amountInput') amountInput!: ElementRef;

  @Output() onNewIngredients: EventEmitter<Ingredient> =
    new EventEmitter<Ingredient>();

  onAddIngredients() {
    let name = this.nameInput.nativeElement.value;
    let amount = this.amountInput.nativeElement.value;

    if (name.trim().length === 0) return;
    if (amount <= 0) return;
    this.onNewIngredients.emit(new Ingredient(name, amount));

    // reset the form
    this.nameInput.nativeElement.value = '';
    this.amountInput.nativeElement.value = '';
  }
}
