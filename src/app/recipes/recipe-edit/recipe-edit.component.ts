import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { RecipesService } from '../recipes.service';
import { IngredientsModel } from '../../shared/ingredients.model';
import { RecipeModel } from '../recipe.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.scss']
})
export class RecipeEditComponent implements OnInit {

  id!: number;
  editMode = false;

  form!: FormGroup;

  constructor(private route: ActivatedRoute,
              private fb: FormBuilder,
              private recipeService: RecipesService,
              ) {
  }

  ngOnInit() {
      this.route.params.subscribe((params: Params) => {
        this.id = +params['id'];
        this.editMode = params['id'] != null;
        this.initForm();
      })
  }

  initForm() {
    let recipeName = '';
    let recipeImagePath = '';
    let recipeDescription = '';
    let recipeIngredients = new FormArray<any>([]);

    if(this.editMode) {
      const recipe = this.recipeService.getRecipe(this.id);
      recipeName = recipe.name;
      recipeImagePath = recipe.imagePath;
      recipeDescription = recipe.description;
      if(recipe['ingredients']) {
        for (let ingredient of recipe.ingredients) {
          recipeIngredients.push(
           this.fb.group({
             name: [ingredient.name, Validators.required],
             amount: [ingredient.amount, Validators.required]
           })
          )
        }
      }
    }
    this.form = this.fb.group({
      recipeName: [recipeName, Validators.required],
      imagePath: [recipeImagePath, Validators.required],
      description: [recipeDescription, Validators.required],
      'ingredients': recipeIngredients
    })
  }

  newIngredient() {
    return this.fb.group({
      name: ['', [Validators.required]],
      amount: ['', Validators.required]
    })
  }

  get ingredients() {
    return this.form.get('ingredients') as FormArray;
  }

  removeIngredient(index: number) {
    this.ingredients.removeAt(index)
  }

  addIngredient() {
    this.ingredients.push(
      this.fb.group({
        name: ['', Validators.required],
        amount: ['', Validators.required]
      })
    )
  }

  submit() {
    let recipe = new RecipeModel(
      this.form.value.recipeName,
      this.form.value.description,
      this.form.value.imagePath,
      this.form.value.ingredients,
    )
    if(this.form.valid && !this.editMode) {
    this.recipeService.addRecipe(recipe)
      this.editMode = false;
      this.form.reset()
      return
    } else {
      this.recipeService.updateRecipe(this.id, recipe);
      this.editMode = false;
      this.form.reset()
    }
  }
}
