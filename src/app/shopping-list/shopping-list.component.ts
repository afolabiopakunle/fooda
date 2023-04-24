import { Component, OnInit, ViewChild } from '@angular/core';
import { IngredientsModel } from '../shared/ingredients.model';
import { ShoppingListService } from './shopping-list.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {

  ingredients: IngredientsModel[] = []

  @ViewChild('form') form!: NgForm;

  constructor(private shoppingListService: ShoppingListService) {
  }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();
    this.shoppingListService.ingredientsChanged.subscribe(newIngredients => {
      this.ingredients = newIngredients
    })
  }

  onEditItem(index: number) {
    this.shoppingListService.startedEditing.next(index);
  }
}
