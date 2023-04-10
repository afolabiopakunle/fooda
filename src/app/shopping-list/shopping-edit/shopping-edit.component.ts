import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { IngredientsModel } from '../../shared/ingredients.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent {

  @ViewChild('nameInput') nameInput!: ElementRef;
  @ViewChild('amountInput') amountInput!: ElementRef;
  ingredient = new IngredientsModel('', 0);
  @Output() sendIngredient  = new EventEmitter<IngredientsModel>();

  addIngredient() {
    this.ingredient.amount = this.amountInput.nativeElement.value;
    this.ingredient.name = this.nameInput.nativeElement.value;
    this.sendIngredient.emit(this.ingredient);
    this.ingredient = new IngredientsModel('', 0);
    this.amountInput.nativeElement.value = null;
    this.nameInput.nativeElement.value = '';
  }
}
