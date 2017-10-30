import {Component, OnInit} from '@angular/core';
import {RecipeService} from "./recipe.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css'],
  providers: []
})
export class RecipeComponent implements OnInit{

  isDataFetchedFromServer: boolean = false;

  constructor(private router: Router, private route: ActivatedRoute, private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.recipeService.onFetchingRecipesFromServer.subscribe(
      (isDataLoaded: boolean) => {
        this.isDataFetchedFromServer = isDataLoaded;
      }
    )
  }

  onAddRecipe() {
    this.router.navigate(['new'], {relativeTo: this.route });
  }

}
