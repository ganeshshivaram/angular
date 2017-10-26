import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {FormArray, FormControl, FormGroup, NgForm, Validators} from "@angular/forms";
import {RecipeService} from "../recipe.service";
import {Recipe} from "../models/recipe.model";

@Component({
  selector: 'app-edit-recipe-item',
  templateUrl: './edit-recipe-item.component.html',
  styleUrls: ['./edit-recipe-item.component.css']
})
export class EditRecipeItemComponent implements OnInit {

  isEditMode: boolean;
  editableRecipeId: number;

  recipeForm: FormGroup;

  constructor(private route: ActivatedRoute, private recipeService: RecipeService, public router: Router) {
  }

  ngOnInit() {
    let recipeName = '';
    let recipeImageUrl = '';
    let recipeDescription = '';
    let recipeIngredients = new FormArray([]);

    let recipe: Recipe;

    this.route.params.subscribe(
      (params: Params) => {
        this.editableRecipeId = +params["id"];
        this.isEditMode = params["id"] == null ? false : true;
        if (this.isEditMode) {
          recipe = this.recipeService.getRecipeById(this.editableRecipeId);

          recipeName = recipe.name;
          recipeImageUrl = recipe.imgUrl;
          recipeDescription = recipe.description;

          if (recipe.ingredients && recipe.ingredients.length > 0) {
            for (var ingredient of recipe.ingredients) {
              recipeIngredients.push(new FormGroup({
                'name': new FormControl(ingredient.name, [Validators.required]),
                'amount': new FormControl(ingredient.amount, [Validators.required, Validators.pattern(/^[1-9]+(0-9)*$/)])
              }));
            }
          }
        }
      }
    );

    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName, [Validators.required]),
      'imgUrl': new FormControl(recipeImageUrl, [Validators.required]),
      'description': new FormControl(recipeDescription, [Validators.required]),
      'ingredients': recipeIngredients
    });
  }

  onSubmit() {
    if(this.isEditMode) {
      this.recipeService.updateRecipe(this.editableRecipeId, this.recipeForm.value);
    } else {
      this.recipeService.addRecipe(this.recipeForm.value);
    }

    this.onResetNavigate();
  }

  onResetNavigate() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  removeIngredient(index: number) {
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);
  }

  onAddIngredient() {
    const ingr = new FormGroup({
      name: new FormControl('', [Validators.required]),
      amount: new FormControl('', [Validators.required, Validators.pattern(/^[1-9]+(0-9)*$/)])
    });

    ingr.valueChanges.subscribe((newValue) => {
      var index = (<FormArray>this.recipeForm.get('ingredients')).controls.indexOf(ingr);
      (<FormArray>this.recipeForm.get('ingredients')).value[index] = newValue;
    });

    ingr.statusChanges.subscribe((newStatus) => {
      newStatus.toLowerCase() === 'valid' ? this.recipeForm.setErrors(null) : this.recipeForm.setErrors({'invalid': true});;
    });

    (<FormArray>this.recipeForm.get('ingredients')).controls.push(ingr);

    this.recipeForm.setErrors({'invalid': true});
  }
}
