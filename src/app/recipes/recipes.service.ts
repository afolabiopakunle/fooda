import { RecipeModel } from './recipe.model';
import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

export class RecipesService {

  recipesChanged = new Subject<RecipeModel[]>();
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
    ),
   new RecipeModel(
        'Egusi',
     'Multi-purpose Nigeria soup with Yoruba origin',
     'https://demandafrica.com/wp-content/uploads/2017/06/EgusiSoup-e1533238405501.jpg',
     [{name: 'Egusi seed', amount: 2}, {name: 'Palm oil', amount: 3} ]
   )
  ]

  constructor() {
  }

  getRecipes() {
    return this.recipes.slice()
  }

  getRecipe(id: number) {
   return this.recipes[id]
  }

  addRecipe(recipe: RecipeModel) {
   this.recipes.push(recipe);
   this.recipesChanged.next(this.recipes);
  }

  updateRecipe(index: number, newRecipe: RecipeModel) {
   this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes);
  }

}
