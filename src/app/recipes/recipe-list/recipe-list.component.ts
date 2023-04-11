import { Component } from '@angular/core';
import { RecipeModel } from '../recipe.model';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
})
export class RecipeListComponent {

  recipe!: RecipeModel;
  recipes: RecipeModel[] = []


  constructor(private recipeService: RecipesService) {
    this.recipes = recipeService.getRecipes();
  }

}
