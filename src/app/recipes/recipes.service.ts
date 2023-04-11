import { RecipeModel } from './recipe.model';
import { EventEmitter } from '@angular/core';

export class RecipesService {

  recipeSelected = new EventEmitter<RecipeModel>();

 private recipes: RecipeModel[] = [
    new RecipeModel('Amala',
      'Yoruba solid',
      'https://i0.wp.com/kscuisine.com/wp-content/uploads/2014/04/IMG_1068.jpg?w=584&ssl=1',
    [{name: 'Elubo', amount: 2}, {name: 'Water', amount: 8}]),
    new RecipeModel(
      'Fufu',
      'Igbo solid',
      'https://i0.wp.com/dobbyssignature.com/wp-content/uploads/2022/07/Nigerian-Fufu-scaled.jpg?fit=2560%2C1473&ssl=1',
      [{name: 'Cassava', amount: 5}, {name: 'Water', amount: 4}]
    )
  ]

  constructor() {
  }

  getRecipes() {
    return this.recipes.slice()
  }
}
