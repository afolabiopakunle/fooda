import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { RecipesService } from '../recipes.service';

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

    if(this.editMode) {
      const recipe = this.recipeService.getRecipe(this.id);
      recipeName = recipe.name;
      recipeImagePath = recipe.imagePath;
      recipeDescription = recipe.description;
    }
    this.form = this.fb.group({
      recipeName: [recipeName],
      imagePath: [recipeImagePath],
      description: [recipeDescription],
      ingredients: this.fb.array([
        this.newIngredient()
      ])
    })
  }

  newIngredient() {
    return this.fb.group({
      name: '',
      amount: ''
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
        name: '',
        amount: ''
      })
    )
  }

  submit() {
    console.log(this.form.value);
  }
}
