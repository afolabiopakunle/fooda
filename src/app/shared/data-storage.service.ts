import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RecipesService } from '../recipes/recipes.service';
import { RecipeModel } from '../recipes/recipe.model';

@Injectable()
export class DataStorageService {

  constructor(private http: HttpClient,
              private recipesService: RecipesService,
              ) { }

  storeRecipe() {
    const recipes = this.recipesService.getRecipes();
    this.http.put('https://angular-15s-default-rtdb.firebaseio.com/recipes.json', recipes)
      .subscribe(response => console.log(response));
  }

  getRecipes() {
    this.http.get<RecipeModel[]>('https://angular-15s-default-rtdb.firebaseio.com/recipes.json')
      .subscribe(recipes => {
        this.recipesService.setRecipes(recipes)
      })
  }
}
