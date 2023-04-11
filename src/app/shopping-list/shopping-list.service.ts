import { Injectable } from '@angular/core';
import { IngredientsModel } from '../shared/ingredients.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  private ingredients: IngredientsModel[] = [
    new IngredientsModel('Elubo', 5),
    new IngredientsModel('Cassava', 3),
  ]
  constructor() { }

  getIngredients() {
    return this.ingredients;
  }

  addIngredient(ingredient: IngredientsModel) {
    this.ingredients.push(ingredient)
  }
}
