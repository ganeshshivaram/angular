import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() tabClicked = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  onHeaderTabClicked(value: string) {
    this.tabClicked.emit(value);
  }

}
