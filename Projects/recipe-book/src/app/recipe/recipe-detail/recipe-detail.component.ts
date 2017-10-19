import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from "../models/recipe.model";
import {RecipeService} from "../recipe.service";
import {Ingredient} from "../../common/ingredient.model";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  @Input() selectedRecipe: Recipe;
  constructor(private recipeService: RecipeService, private route: ActivatedRoute) { }

  ngOnInit() {
    var id: number;
    this.route.params.subscribe((params: Params) => {
      id = +params["id"];
      this.selectedRecipe = this.recipeService.getRecipeById(id);
    });
  }

  moveToShoppingList(ingredients: Ingredient[]) {
    this.recipeService.moveToShoppingList(ingredients);
  }
}
