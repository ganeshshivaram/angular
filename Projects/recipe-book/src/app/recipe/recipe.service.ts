import {recipes} from "./recipe.data";
import {Injectable} from "@angular/core";
import {Ingredient} from "../common/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {

  private recipes = recipes;

  constructor(private shoppingListService: ShoppingListService) {

  }

  getRecipes() {
    return recipes.slice();
  }

  getRecipeById(id: number) {
    return recipes.slice()[id];
  }

  moveToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredientsToShoppingList(ingredients);
  }
}
