import {Component, OnInit} from '@angular/core';
import { Response } from '@angular/http';

import {ServerService} from './server.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  appName = {};
  servers = [
    {
      name: 'Testserver',
      capacity: 10,
      id: this.generateId()
    },
    {
      name: 'Liveserver',
      capacity: 100,
      id: this.generateId()
    }
  ];

  onAddServer(name: string) {

    this.getServers();

    this.servers.push({
      name: name,
      capacity: 50,
      id: this.generateId()
    });
  }

  constructor(private serverService: ServerService) {
  }

  ngOnInit(): void {
    this.getAppName();
  }

  onSaveServers() {
    this.serverService.saveServers(this.servers)
      .subscribe(
        (response) => {
          console.log(response);
        },
        (error) => {
          console.log(error);
        });
  }

  getServers() {
    this.serverService.getServers().subscribe(
      (response: Response) => {
          const data = response.json();
          console.log(data);
        },
      (error) => { console.log(error); }
    );
  }

  getAppName() {
     this.appName = this.serverService.getAppName(); // use async filter to resolve the observable
  }

  private generateId() {
    return Math.round(Math.random() * 10000);
  }
}
