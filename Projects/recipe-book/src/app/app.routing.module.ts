
import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {RecipeComponent} from "./recipe/recipe.component";
import {ShoppingListComponent} from "./shopping-list/shopping-list.component";
import {RecipeDetailComponent} from "./recipe/recipe-detail/recipe-detail.component";
import {NoRecipeSelectedComponent} from "./no-recipe-selected/no-recipe-selected.component";
import {EditRecipeItemComponent} from "./recipe/edit-recipe-item/edit-recipe-item.component";

const appRoutes: Routes =
 [
   { path: '', redirectTo: 'recipes', pathMatch: 'full'},
   { path: 'recipes', component: RecipeComponent,
     children: [
       {path: 'new', component: EditRecipeItemComponent},
       {path: ':id', component: RecipeDetailComponent},
       {path: ':id/edit', component: EditRecipeItemComponent},
       {path: '**', component: NoRecipeSelectedComponent}
     ]
   },
   { path: 'shopping-list', component: ShoppingListComponent },
   { path: '**', redirectTo: 'recipes' }
 ]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
