import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RecipesService } from '../recipes/recipes.service';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor(private http: HttpClient,
              private recipesService: RecipesService,
              ) { }

  storeRecipe() {
    const recipes = this.recipesService.getRecipes();
    this.http.put('https://angular-15s-default-rtdb.firebaseio.com/recipes.json', recipes)
      .subscribe(response => console.log(response));
  }
}
