import { Component } from '@angular/core';
import { RecipeModel } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent {

  recipe!: RecipeModel;
  recipes: RecipeModel[] = [
    new RecipeModel('Amala', 'Yoruba solid', 'https://i0.wp.com/kscuisine.com/wp-content/uploads/2014/04/IMG_1068.jpg?w=584&ssl=1'),
    new RecipeModel('Fufu', 'Igbo solid', 'https://www.thespruceeats.com/thmb/Lkgiza_StWUtGA1UvDgf1EhBwic=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/yam-fufu-2138088-hero-01-3366d155060e480abaf33cc67031dc9d.jpg')
  ];

  showRecipe(recipe: RecipeModel) {
    this.recipe = recipe;
  }

  onClickRecipe() {
    console.log(this.recipe);
  }
}
