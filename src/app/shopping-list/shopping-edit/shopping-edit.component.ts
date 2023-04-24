import { Component, ElementRef, EventEmitter, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { IngredientsModel } from '../../shared/ingredients.model';
import { NgForm } from '@angular/forms';
import { ShoppingListService } from '../shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {

  subscription!: Subscription;
  ingredient = new IngredientsModel('', 0);
  editMode = false;
  editedItemIndex!: number;
  editedItem!: IngredientsModel;
  @ViewChild('form') form!: NgForm;


  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit() {
    this.subscription = this.shoppingListService.startedEditing
      .subscribe((index: number) => {
        this.editMode = true;
        this.editedItemIndex = index;
        this.editedItem = this.shoppingListService.getIngredient(index);
        this.form.setValue({
          amount: this.editedItem.amount,
          name: this.editedItem.name,
        })
      })
  }

  addIngredient(form: NgForm) {
    if(form.invalid) return;
    this.ingredient.amount = form.value.amount;
    this.ingredient.name = form.value.name;
    if(this.editMode) {
      this.shoppingListService.updateIngredient(this.editedItemIndex, this.ingredient);
      this.editMode = false;
      this.form.resetForm();
      return;
    }
    this.shoppingListService.addIngredient(this.ingredient);
    this.editMode = false;
    this.form.resetForm();
  }

  clear() {
    this.editMode = false;
    this.form.resetForm();
  }

  onDelete() {
    this.shoppingListService.deleteIngredient(this.editedItemIndex);
    this.form.resetForm();
    this.editMode = false;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
