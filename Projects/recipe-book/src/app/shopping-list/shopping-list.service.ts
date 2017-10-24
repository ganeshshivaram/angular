import {Ingredient} from "../common/ingredient.model";
import {Subject} from "rxjs/Subject";

export class ShoppingListService {

  private ingredients: Ingredient[] = [];

  uponAddingIngredientsToShoppingList = new Subject<Ingredient[]>();

  uponClickingAnItemForEdit = new Subject<number>();


  getIngredients() {
    return this.ingredients.slice();
  }

  getItemByIndex(index){
    return this.ingredients.slice()[index];
  }

  addSingleIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.uponAddingIngredientsToShoppingList.next(this.ingredients.slice());
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.uponAddingIngredientsToShoppingList.next(this.ingredients.slice());
  }

  updateIngredient(index: number, ingredient: Ingredient) {
    this.ingredients[index] = ingredient;
    this.uponAddingIngredientsToShoppingList.next(this.ingredients.slice());
  }

  deleteIngredient(index: number) {
    this.ingredients.splice(index, 1);
    this.uponAddingIngredientsToShoppingList.next(this.ingredients.slice());
  }
}
