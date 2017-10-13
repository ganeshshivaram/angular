import {Ingredient} from "../common/ingredient.model";
import {EventEmitter} from "@angular/core";

export class ShoppingListService {

  private ingredients: Ingredient[] = [];

  uponAddingIngredientsToShoppingList = new EventEmitter<Ingredient[]>();

  getIngredients() {
    return this.ingredients.slice();
  }

  addSingleIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.uponAddingIngredientsToShoppingList.emit(this.ingredients);
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.uponAddingIngredientsToShoppingList.emit(this.ingredients);
  }
}
