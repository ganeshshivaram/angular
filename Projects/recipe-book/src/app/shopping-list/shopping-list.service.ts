import {Ingredient} from "../common/ingredient.model";
import {Subject} from "rxjs/Subject";

export class ShoppingListService {

  private ingredients: Ingredient[] = [];

  uponAddingIngredientsToShoppingList = new Subject<Ingredient[]>();

  getIngredients() {
    return this.ingredients.slice();
  }

  addSingleIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.uponAddingIngredientsToShoppingList.next(this.ingredients);
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.uponAddingIngredientsToShoppingList.next(this.ingredients);
  }
}
