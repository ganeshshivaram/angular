import {Component, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('form') pgForm: NgForm;
  suggestUserName() {
    const suggestedName = 'Superuser';
  }

  // onFormSubmit(form: NgForm) {
  //   console.log(form);
  // }

  onFormSubmit() {
    console.log(this.pgForm);
  }
}
