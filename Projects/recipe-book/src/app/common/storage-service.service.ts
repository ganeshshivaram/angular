import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";
import "rxjs/add/operator/map";
import {Recipe} from "../recipe/models/recipe.model";

@Injectable()
export class StorageService {

  constructor(private http: Http) { }

  saveContentToServer(recipes: Recipe[]) {
    return this.http.put("https://ng-http-playground.firebaseio.com/recipes.json", recipes);
  }

  getRecipesFromServer() {
    return this.http.get("https://ng-http-playground.firebaseio.com/recipes.json").map(
      (response: Response) => {
        const data = response.json();
        return data;
      }
    );
  }

}
