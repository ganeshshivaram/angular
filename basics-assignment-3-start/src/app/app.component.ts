import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  btnNotClicked = true;
  clicks = [];

  onBtnClick() {
    this.btnNotClicked = ! this.btnNotClicked;
    this.clicks.push(new Date());
  }
}
