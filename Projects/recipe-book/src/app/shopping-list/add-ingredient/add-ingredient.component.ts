import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from "../../common/ingredient.model";
import {ShoppingListService} from "../shopping-list.service";

@Component({
  selector: 'app-add-ingredient',
  templateUrl: './add-ingredient.component.html',
  styleUrls: ['./add-ingredient.component.css']
})
export class AddIngredientComponent implements OnInit {

  @ViewChild('ingredientName') ingredientName: ElementRef;
  @ViewChild('ingredientAmount') ingredientAmount: ElementRef;

  constructor(private shoppingList: ShoppingListService) { }

  ngOnInit() {
  }

  onAddIngredient() {
    var ingrName = this.ingredientName.nativeElement.value;
    var ingrAmount = this.ingredientAmount.nativeElement.value;
    var ingredient = new Ingredient(ingrName, ingrAmount);

    this.shoppingList.addSingleIngredient(ingredient);
  }

}
