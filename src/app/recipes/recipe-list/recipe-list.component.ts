import { Component, EventEmitter, Output } from '@angular/core';
import { RecipeModel } from '../recipe.model';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
  providers: [RecipesService]
})
export class RecipeListComponent {

  recipe!: RecipeModel;
  @Output() clickedRecipe = new EventEmitter()
  recipes: RecipeModel[] = []

  showRecipe(recipe: RecipeModel) {
    this.recipe = recipe;
  }

  onClickRecipe() {
    this.clickedRecipe.emit(this.recipe)
  }

  constructor(private recipeService: RecipesService) {
    this.recipes = recipeService.getRecipes();
  }

}
