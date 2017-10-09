import { Component, OnInit } from '@angular/core';
import { Recipe } from '../models/recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipies: Recipe[] = [];

  recipe: any = {
    name: 'Recipe 0',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, ' +
    'when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic ' +
    'typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with ' +
    'desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Why do we use it?\n' +
    'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.' +
    'The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable' +
    ' English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover ' +
    'many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).\n',
    imgUrl: "https://media1.popsugar-assets.com/files/thumbor/ED8MKXfNuqwkoPbYQeAgo5xOak4/fit-in/" +
            "550x550/filters:format_auto-!!-:strip_icc-!!-/2014/03/18/055/n/1922195/d0c6e9010e28b84a_wide/i/Shake-Shake-Burger-Recipe-Video.jpg"
  };

  constructor() {

    this.recipies.push(
      new Recipe(this.recipe.name, this.recipe.description, this.recipe.imgUrl),
      new Recipe(this.recipe.name, this.recipe.description, this.recipe.imgUrl)
    );
  }

  ngOnInit() {
  }

}
