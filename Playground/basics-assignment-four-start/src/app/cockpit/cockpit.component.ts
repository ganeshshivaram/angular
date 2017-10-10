import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  serverName: string = '';
  serverContent: string = '';

  @Output() onServerAdd = new EventEmitter<{ name: string, content: string }>();

  @Output() onBlueprintAdd = new EventEmitter<{ name: string, content: string }>();
  constructor() { }

  ngOnInit() {
  }

  addServer(): void {
    this.onServerAdd.emit({name: this.serverName, content: this.serverContent});
  }

  addServerBlueprint(): void {
    this.onBlueprintAdd.emit({name: this.serverName, content: this.serverContent});
  }


}
