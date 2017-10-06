import {Component, OnInit} from "@angular/core";

@Component({
  selector: 'app-success-alert',
  templateUrl: './app-success-alert.component.html',
  styles: [`
  h3 {
    border: 1px solid darkgreen;
    background-color: #00ff00;
    height: 50px;
     }
  `]
})
export class AppSuccessAlertComponent implements OnInit {
  ngOnInit(): void {
  }
}
