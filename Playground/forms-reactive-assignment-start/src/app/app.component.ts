import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomValidator} from './custom-validator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  projectForm: FormGroup;

  ngOnInit(): void {
    this.projectForm = new FormGroup({
      'project-name': new FormControl(null, [Validators.required, CustomValidator.nameValidator.bind(this)], [CustomValidator.asyncNameValidator]),
      'email': new FormControl(null, Validators.required),
      'project-status': new FormControl('critical')
    });
  }

  onSubmit() {
    console.log(this.projectForm);
  }

}

/** Rename FormsModule to ReactiveFormsModule in app.module.ts
  * Add [formGroup]="projectForm" in the html
  * Declare and instantiate projectForm as shown above
  * add formControlName in html to link projectForm with respective inputs
  * If reqd, add validators to individual form control as shown above*/

