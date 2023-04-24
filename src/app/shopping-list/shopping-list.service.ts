import { Injectable } from '@angular/core';
import { IngredientsModel } from '../shared/ingredients.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShoppingListService {

  ingredientsChanged = new Subject<IngredientsModel[]>();
  startedEditing = new Subject<number>();

  private ingredients: IngredientsModel[] = [
    new IngredientsModel('Elubo', 5),
    new IngredientsModel('Cassava', 3),
  ];

  constructor() {
  }

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: IngredientsModel) {
    console.log('add');
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.ingredients);
  }

  addIngredients(ingredients: IngredientsModel[]) {
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  deleteIngredient(index: number) {
    this.ingredients.splice(index, 1);
    this.ingredientsChanged.next(this.ingredients);
  }

  getIngredient(index: number) {
    return this.ingredients[index];
  }

  updateIngredient(index: number, newIngredient: IngredientsModel) {
    this.ingredients[index] = newIngredient;
    this.ingredientsChanged.next(this.ingredients);
  }

  saveToShopping(ingredients: IngredientsModel[]) {
    this.ingredients.push(...ingredients);
  }
}
