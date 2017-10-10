import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  @Output() evenNumberemitted = new EventEmitter<number>();
  @Output() oddNumberemitted = new EventEmitter<number>();

  constructor() { }

  interval: any;
  val: number = 0;

  ngOnInit() {
  }

  onStart() {
    this.interval = setInterval(() => {
        this.val = this.val + 1;
        this.val % 2 == 0 ? this.evenNumberemitted.emit(this.val) : this.oddNumberemitted.emit(this.val);
    }, 2000);
  }

  onStop() {
    clearInterval(this.interval);
  }

}
