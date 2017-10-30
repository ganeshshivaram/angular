import {Injectable, OnInit} from "@angular/core";
import {Ingredient} from "../common/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";
import {Recipe} from "./models/recipe.model";
import {Subject} from "rxjs/Subject";
import {StorageService} from "../common/storage-service.service";

@Injectable()
export class RecipeService {

  public onRecipeAddOrUpdate = new Subject<Recipe[]>();
  public onFetchingRecipesFromServer = new Subject<Boolean>();

  public onRemovingIngredientFromRecipe = new Subject<Recipe>();
  private recipes;

  constructor(private shoppingListService: ShoppingListService, private storageService: StorageService) {
    this.getRecipesFromServer().subscribe(
      (recipes: Recipe[]) => {
        this.recipes = recipes;
        this.onFetchingRecipesFromServer.next(true);
      }
    );
  }

  getRecipesFromServer() {
    return this.storageService.getRecipesFromServer().map(
      (response: Recipe[]) => {
        return response.slice();
      }
    );
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipeById(id: number) {
    return this.recipes.slice()[id];
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

  reloadNewRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
  }
}
