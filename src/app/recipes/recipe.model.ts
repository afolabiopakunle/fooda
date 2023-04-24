import { IngredientsModel } from '../shared/ingredients.model';

export class RecipeModel {
  constructor(
    public name: string,
    public description: string,
    public imagePath: string,
    public ingredients: IngredientsModel[],
    ) {
  }
}
