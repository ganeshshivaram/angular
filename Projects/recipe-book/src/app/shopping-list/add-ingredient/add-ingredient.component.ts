import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from "../../common/ingredient.model";

@Component({
  selector: 'app-add-ingredient',
  templateUrl: './add-ingredient.component.html',
  styleUrls: ['./add-ingredient.component.css']
})
export class AddIngredientComponent implements OnInit {

  @ViewChild('ingredientName') ingredientName: ElementRef;
  @ViewChild('ingredientAmount') ingredientAmount: ElementRef;

  @Output() afterIngredientAdded = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit() {
  }

  onIngredientAdd() {
    var ingrName = this.ingredientName.nativeElement.value;
    var ingrAmount = this.ingredientAmount.nativeElement.value;
    var ingr = new Ingredient(ingrName, ingrAmount);

    this.afterIngredientAdded.emit(ingr);

  }

}
