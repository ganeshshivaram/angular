import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  evenNumberArr: string[] = [];
  oddNumberArr: string[] = [];

  evenNumberEmitted(num:number) {
    this.evenNumberArr.push("Even" + num);
  }

  oddNumberEmitted(num:number) {
    this.oddNumberArr.push("Odd" + num);
  }
}
