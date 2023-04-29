import { Component, OnInit } from '@angular/core';
import { RecipeModel } from './recipe.model';
import { RecipesService } from './recipes.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss'],
})
export class RecipesComponent implements OnInit {

  recipe!: RecipeModel;

  constructor(private recipeService: RecipesService) {
  }

  ngOnInit() {
    this.recipeService.recipeSelected.subscribe((recipe) => {
      this.recipe = recipe;
    })
  }


}
