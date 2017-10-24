import { Component, OnInit } from '@angular/core';
import {Ingredient} from "../common/ingredient.model";
import {ShoppingListService} from "./shopping-list.service";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[] = [];
  constructor(private shoppingListService: ShoppingListService) {
  }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();

    this.shoppingListService.uponAddingIngredientsToShoppingList.subscribe((ingredients: Ingredient[]) => {
     this.ingredients = ingredients;
    });
  };

  onItemClick(index) {
    this.shoppingListService.uponClickingAnItemForEdit.next(index);
  }
}
