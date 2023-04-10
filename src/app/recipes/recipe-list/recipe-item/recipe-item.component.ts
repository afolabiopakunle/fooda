import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RecipeModel } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss']
})
export class RecipeItemComponent {
  @Output() recipeItem = new EventEmitter<RecipeModel>()
  @Input() recipe!: RecipeModel;

  onRecipeClicked() {
    this.recipeItem.emit(this.recipe);
  }
}
