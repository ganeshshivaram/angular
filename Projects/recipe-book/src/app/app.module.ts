import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AppRoutingModule} from "./app.routing.module";
import {HttpModule} from "@angular/http";

import {StorageService} from "./common/storage-service.service";
import {RecipeService} from "./recipe/recipe.service";
import {ShoppingListService} from "./shopping-list/shopping-list.service";

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipeComponent } from './recipe/recipe.component';
import { RecipeListComponent } from './recipe/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipe/recipe-detail/recipe-detail.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { AddIngredientComponent } from './shopping-list/add-ingredient/add-ingredient.component';
import { RecipeItemComponent } from './recipe/recipe-item/recipe-item.component';
import { NoRecipeSelectedComponent } from './no-recipe-selected/no-recipe-selected.component';
import { EditRecipeItemComponent } from './recipe/edit-recipe-item/edit-recipe-item.component';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipeComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    ShoppingListComponent,
    AddIngredientComponent,
    RecipeItemComponent,
    NoRecipeSelectedComponent,
    EditRecipeItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [ShoppingListService, RecipeService, StorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
