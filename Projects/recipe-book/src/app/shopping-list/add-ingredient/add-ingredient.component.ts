import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from "../../common/ingredient.model";
import {ShoppingListService} from "../shopping-list.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-add-ingredient',
  templateUrl: './add-ingredient.component.html',
  styleUrls: ['./add-ingredient.component.css']
})
export class AddIngredientComponent implements OnInit {

  @ViewChild('ingForm') ingForm: NgForm;
  isEditMode: boolean = false;
  editedIngredient: Ingredient;
  editedItemIndex: number;

  constructor(private shoppingList: ShoppingListService) {
  }

  ngOnInit() {
    this.shoppingList.uponClickingAnItemForEdit.subscribe((index) => {
      this.isEditMode = true;
      this.editedIngredient = this.shoppingList.getItemByIndex(index);
      this.editedItemIndex = index;
      this.ingForm.setValue({
        'ingredientName': this.editedIngredient.name,
        'ingredientAmount': this.editedIngredient.amount
      });
    });
  }

  onAddClicked() {
    var ingrName = this.ingForm.value.ingredientName;
    var ingrAmount = this.ingForm.value.ingredientAmount;
    var ingredient = new Ingredient(ingrName, ingrAmount);

    if (this.isEditMode) {
      this.shoppingList.updateIngredient(this.editedItemIndex, ingredient);
    }
    else {

      this.shoppingList.addSingleIngredient(ingredient);
    }
    this.onClear();
  }

  onClear() {
    this.isEditMode = false;
    this.ingForm.reset();
  }

  onDelete() {
    this.shoppingList.deleteIngredient(this.editedItemIndex);
    this.onClear();
  }
}
