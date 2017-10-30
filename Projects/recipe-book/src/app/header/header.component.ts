import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {StorageService} from "../common/storage-service.service";
import {RecipeService} from "../recipe/recipe.service";
import {Recipe} from "../recipe/models/recipe.model";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() tabClicked = new EventEmitter<string>();
  constructor(private storageService: StorageService, private recipeService: RecipeService) { }

  ngOnInit() {
  }

  onHeaderTabClicked(value: string) {
    this.tabClicked.emit(value);
  }

  onGetRecipesFromServer() {
    return this.storageService.getRecipesFromServer().subscribe(
      (response: Recipe[]) => {
        this.recipeService.reloadNewRecipes(response);
      }
    )
  }

  onSaveContentToServer() {
    return this.storageService.saveContentToServer(this.recipeService.getRecipes()).subscribe(
      (response: any) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
