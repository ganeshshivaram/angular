import { Component, OnInit } from '@angular/core';
import {Ingredient} from "../common/ingredient.model";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[] = [];
  constructor() {

    this.ingredients.push(new Ingredient('Tomato', 10));
    this.ingredients.push(new Ingredient('Potato', 15));
  }

  ngOnInit() {
  }

}
