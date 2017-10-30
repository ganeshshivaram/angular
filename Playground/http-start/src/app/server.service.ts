import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ServerService {

  constructor(private http: Http) { }

  saveServers(servers) {
    return this.http.post('https://ng-http-playground.firebaseio.com/data.json', servers);
  }


  getServers() {
    return this.http.get('https://ng-http-playground.firebaseio.com/data.json');

    // **** TRANSFORM OUTPUT BEFORE SENDING IT AS AN ARRAY ****
    // return this.http.get('https://ng-http-playground.firebaseio.com/data.json').map(
    //   (response: Response) => {
    //     const  data = response.json();
    //     return data;
    //   },
    //   (error:Response) {
    //     console.log(error);
    //     return Observable.throw(error);
    //   }
    // );
  }

  getAppName() {
    return this.http.get('https://ng-http-playground.firebaseio.com/appName.json').map(
      (response: Response) => {
        const data = response.json();
        return data;
      }
    );
  }
}
