import { RecipeModel } from './recipe.model';

export class RecipesService {

 private recipes: RecipeModel[] = [
    new RecipeModel('Amala', 'Yoruba solid', 'https://i0.wp.com/kscuisine.com/wp-content/uploads/2014/04/IMG_1068.jpg?w=584&ssl=1'),
    new RecipeModel('Fufu', 'Igbo solid', 'https://www.thespruceeats.com/thmb/Lkgiza_StWUtGA1UvDgf1EhBwic=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/yam-fufu-2138088-hero-01-3366d155060e480abaf33cc67031dc9d.jpg'),
  ];

  constructor() {
  }

  getRecipes() {
    return this.recipes.slice()
  }
}
