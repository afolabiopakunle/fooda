import { Component } from '@angular/core';
import { RecipeModel } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent {

  recipe!: RecipeModel;

  receivedRecipe(recipe: RecipeModel) {
    this.recipe = recipe;
  }

}
