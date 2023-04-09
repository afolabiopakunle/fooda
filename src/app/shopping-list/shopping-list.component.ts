import { Component } from '@angular/core';
import { IngredientsModel } from '../shared/ingredients.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent {

  ingredients: IngredientsModel[] = [
    new IngredientsModel('Elubo', 5),
    new IngredientsModel('Cassava', 3),
  ];

}
