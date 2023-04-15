import { Component } from '@angular/core';
import { RecipeModel } from '../recipe.model';
import { RecipesService } from '../recipes.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
})
export class RecipeListComponent {

  recipe!: RecipeModel;
  recipes: RecipeModel[] = []


  constructor(private recipeService: RecipesService,
              private route: ActivatedRoute,
              private router: Router,
  ) {
    this.recipes = recipeService.getRecipes();
  }

  newRecipe() {
    this.router.navigate(['new'], {relativeTo: this.route})
  }

}
