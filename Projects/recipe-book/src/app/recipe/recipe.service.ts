import {recipes} from "./recipe.data";
import {EventEmitter, Injectable} from "@angular/core";
import {Recipe} from "./models/recipe.model";
import {Ingredient} from "../common/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {

  private recipes = recipes;

  onRecipeSelected = new EventEmitter<Recipe>();

  constructor(private shoppingListService: ShoppingListService) {

  }

  getRecipes() {
    return recipes.slice();
  }

  moveToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredientsToShoppingList(ingredients);
  }
}
