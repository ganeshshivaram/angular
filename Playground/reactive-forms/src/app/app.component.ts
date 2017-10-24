import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: string;
  genders: string[];
  pgForm: FormGroup;
  bannedUserNames: string[] = ['Chris', 'Anna'];

  ngOnInit(): void {
    this.pgForm = new FormGroup({
      'username': new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
      'email': new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmails.bind(this)),
      'gender': new FormControl('female'),
      'hobbies': new FormArray([])
    });

    this.title = 'app';
    this.genders = ['male', 'female'];
  }

  onSubmit() {
    console.log(this.pgForm);
  }
  onAddHobby() {
    (<FormArray>this.pgForm.get('hobbies')).push(new FormControl(null, [Validators.required]));
  }

   /* IMPORTANT
    * U Can subscribe to form value changes using an observable. this.pgForm.valueChanges.subscribe( (newValue) => { } );
    * U Can subscribe to form status changes using an observable. this.pgForm.statusChanges.subscribe( (newValue) => { } );
    * U Can subscribe to form control/property status changes using an observable. this.pgForm.valueChanges.controls[].subscribe( (newValue) => { } );
    * U can update form value using this.pgForm.setValue / this.pgForm.patchValue
   */

  /* custom validator */
  forbiddenNames(control: FormControl): {[str: string]: boolean} {
    if (this.bannedUserNames.indexOf(control.value) !== -1) {
      return { 'nameIsBanned': true };
    }
    return null;
  }

  /* custom async validator */
  forbiddenEmails(control: FormControl): Observable<any> | Promise<any> {
    const pmse = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 't@t.com') {
          resolve({'emailIsForbidden': true});
        } else {
          resolve(null);
        }
      }, 1500);
    });
    return pmse;
  }
}
