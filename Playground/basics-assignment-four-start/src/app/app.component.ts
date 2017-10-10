import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  serverElements: { name: string, content: string, type: string } [] = [];

  onServerAdded(serverData: { name: string, content: string }) {
    this.serverElements.push({name: serverData.name, content: serverData.content, type: 'SERVER'});
  }

  onBlueprintAdded(bluePrintData: { name: string, content: string }) {
    this.serverElements.push({name: bluePrintData.name, content: bluePrintData.content, type: 'BLUEPRINT'});
  }
}
