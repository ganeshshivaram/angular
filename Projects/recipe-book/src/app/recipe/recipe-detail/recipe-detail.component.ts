import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from "../models/recipe.model";
import {RecipeService} from "../recipe.service";
import {Ingredient} from "../../common/ingredient.model";
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  @Input() selectedRecipe: Recipe;
  editedRecipeId: number;
  constructor(private recipeService: RecipeService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.editedRecipeId = +params["id"];
      this.selectedRecipe = this.recipeService.getRecipeById(this.editedRecipeId);
    });
  }

  moveToShoppingList(ingredients: Ingredient[]) {
    this.recipeService.moveToShoppingList(ingredients);
  }

  onDeleteRecipe() {
    this.recipeService.deleteRecipe(this.editedRecipeId);
    this.router.navigate(['../'], { relativeTo: this.route });
  }
}
