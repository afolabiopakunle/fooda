import { RecipeModel } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class RecipesService {

  recipesChanged = new Subject<RecipeModel[]>();
  recipeSelected = new EventEmitter<RecipeModel>();

 private recipes: RecipeModel[] = []

  constructor() {
  }

  setRecipes(recipes: RecipeModel[]) {
   this.recipes = recipes.slice();
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes() {
    return this.recipes.slice();
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

  deleteRecipe(index: number) {
   this.recipes.splice(index, 1);
   this.recipesChanged.next(this.recipes);
 }

}
