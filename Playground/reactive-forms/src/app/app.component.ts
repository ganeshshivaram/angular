import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: string;
  genders: string[];
  pgForm: FormGroup;

  ngOnInit(): void {
    this.pgForm = new FormGroup({
      'username': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email]),
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
}
