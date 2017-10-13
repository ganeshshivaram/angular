import {Component} from '@angular/core';
import {UserService} from "./common.services/user.services";
import {CounterService} from "./common.services/counter.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService, CounterService]
})
export class AppComponent {

  activeUsers: string[];
  inactiveUsers: string[];

  constructor(private userService: UserService, private counterService: CounterService) {
    this.activeUsers = this.userService.activeUsers;
    this.inactiveUsers = this.userService.inactiveUsers;
  }
}
