import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class ServerService {

  constructor(private http: Http) { }

  saveServers(servers) {
    return this.http.post('https://ng-http-playground.firebaseio.com/data.json', servers);
  }


  getServers() {
    return this.http.get('https://ng-http-playground.firebaseio.com/data.json');
  }

}
