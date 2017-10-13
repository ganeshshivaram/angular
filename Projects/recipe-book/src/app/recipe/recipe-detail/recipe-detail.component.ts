import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from "../models/recipe.model";
import {RecipeService} from "../recipe.service";
import {Ingredient} from "../../common/ingredient.model";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  @Input() selectedRecipe: Recipe;
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipeService.onRecipeSelected.subscribe((recipe) => {
      this.selectedRecipe = recipe;
    });
  }

  moveToShoppingList(ingredients: Ingredient[]) {
    this.recipeService.moveToShoppingList(ingredients);
  }
}
