import { Component, OnDestroy, OnInit } from '@angular/core';
import { RecipeModel } from '../recipe.model';
import { RecipesService } from '../recipes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataStorageService } from '../../shared/data-storage.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
})
export class RecipeListComponent implements OnInit, OnDestroy {

  recipe!: RecipeModel;
  recipes: RecipeModel[] = []
  sub$ = new Subscription();

  constructor(private recipeService: RecipesService,
              private route: ActivatedRoute,
              private router: Router,
              private dataStoreService: DataStorageService,
  ) {
    this.recipes = recipeService.getRecipes();
  }

  ngOnInit() {
    this.sub$ = this.recipeService.recipesChanged.subscribe(recipes => {
      this.recipes = recipes;
    })
    this.dataStoreService.getRecipes();
  }

  newRecipe() {
    this.router.navigate(['new'], {relativeTo: this.route})
  }

  ngOnDestroy() {
    this.sub$.unsubscribe();
  }
}
