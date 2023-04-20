import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { IngredientsModel } from '../../shared/ingredients.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent {


  ingredient = new IngredientsModel('', 0);
  @Output() sendIngredient  = new EventEmitter<IngredientsModel>();

  addIngredient(form: NgForm) {
    if(form.invalid) return;
    this.ingredient.amount = form.value.amount;
    this.ingredient.name = form.value.name;
    this.sendIngredient.emit(this.ingredient);
  }
}
