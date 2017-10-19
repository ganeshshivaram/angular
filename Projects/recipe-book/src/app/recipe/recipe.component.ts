import { Component } from '@angular/core';
import {RecipeService} from "./recipe.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css'],
  providers: [RecipeService]
})
export class RecipeComponent {
  constructor(private router: Router, private route: ActivatedRoute) { }

  onAddRecipe() {
    this.router.navigate(['new'], {relativeTo: this.route });
  }

}
