import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-edit-recipe-item',
  templateUrl: './edit-recipe-item.component.html',
  styleUrls: ['./edit-recipe-item.component.css']
})
export class EditRecipeItemComponent implements OnInit {

  isEditMode: boolean;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
         this.isEditMode = params["id"] == null ? false : true;
      }
    )
  }
}
