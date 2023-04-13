import { Component, Input } from '@angular/core';
import { RecipeModel } from '../../recipe.model';
import { RecipesService } from '../../recipes.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss']
})
export class RecipeItemComponent {

  @Input() recipe!: RecipeModel;
  @Input() index!: number;

  constructor(private recipeService: RecipesService) {
  }

  onRecipeClicked() {
    this.recipeService.recipeSelected.emit(this.recipe);
  }

}
