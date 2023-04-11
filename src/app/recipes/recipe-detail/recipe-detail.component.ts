import { Component, Input } from '@angular/core';
import { RecipeModel } from '../recipe.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent {

  @Input() recipe!: RecipeModel;

}
