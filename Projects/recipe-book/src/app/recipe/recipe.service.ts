import {recipes} from "./recipe.data";
import {Injectable} from "@angular/core";
import {Ingredient} from "../common/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";
import {Recipe} from "./models/recipe.model";
import {Subject} from "rxjs/Subject";

@Injectable()
export class RecipeService {

  public onRecipeAddOrUpdate = new Subject<Recipe[]>();
  public onRemovingIngredientFromRecipe = new Subject<Recipe>();
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

  updateRecipe(recipeId: number, recipe: Recipe) {
    this.recipes[recipeId] = recipe;
    this.onRecipeAddOrUpdate.next(this.recipes.slice());
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.onRecipeAddOrUpdate.next(this.recipes.slice());
  }

  removeIngredientFromRecipe(index: number, recipeId: number) {
    this.recipes[recipeId].ingredients.splice(index, 1);
    this.onRemovingIngredientFromRecipe.next(this.recipes[recipeId]);
  }

  deleteRecipe(id: number) {
    this.recipes.splice(id,1);
    this.onRecipeAddOrUpdate.next(this.recipes.slice());
  }
}
