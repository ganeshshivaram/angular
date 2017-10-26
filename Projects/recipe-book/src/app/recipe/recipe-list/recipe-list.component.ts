import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {Recipe} from '../models/recipe.model';
import {RecipeService} from "../recipe.service";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {

  recipes: Recipe[];
  subscription: Subscription;

  constructor(private recipeService: RecipeService) {
  }

  ngOnInit() {
    this.subscription = this.recipeService.onRecipeAddOrUpdate.subscribe( (newRecipes: Recipe[]) => {
      this.recipes = newRecipes;
    });

    this.recipes = this.recipeService.getRecipes();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
