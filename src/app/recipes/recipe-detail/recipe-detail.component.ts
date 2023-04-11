import { Component, Input, OnInit } from '@angular/core';
import { RecipeModel } from '../recipe.model';
import { Observable } from 'rxjs';
import { IngredientsModel } from '../../shared/ingredients.model';
import { ShoppingListService } from '../../shopping-list/shopping-list.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit{

  @Input() recipe!: RecipeModel

  ingredients!: IngredientsModel[];

  constructor(private shoppingListService: ShoppingListService) {
  }

  ngOnInit() {
    this.ingredients =this.shoppingListService.getIngredients()
  }

}
