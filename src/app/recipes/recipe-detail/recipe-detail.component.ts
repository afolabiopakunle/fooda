import { Component, Input, OnInit } from '@angular/core';
import { RecipeModel } from '../recipe.model';
import { Observable } from 'rxjs';
import { IngredientsModel } from '../../shared/ingredients.model';
import { ShoppingListService } from '../../shopping-list/shopping-list.service';
import { ActivatedRoute } from '@angular/router';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit{

  recipe!: RecipeModel
  id!: number;

  constructor(private recipesService: RecipesService,
              private shoppingListService: ShoppingListService,
              private route: ActivatedRoute,
              ) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params['id']
      this.recipe = this.recipesService.getRecipe(this.id)
    })
  }

  onSaveToShopping(ingredients: IngredientsModel[]) {
    this.shoppingListService.saveToShopping(this.recipe.ingredients);
  }
}
