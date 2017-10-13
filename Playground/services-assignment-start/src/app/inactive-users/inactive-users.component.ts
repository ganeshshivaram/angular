import { Component, Input } from '@angular/core';
import {UserService} from "../common.services/user.services";


@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent {

  @Input() users: string[];

  constructor(private userService: UserService) {
    this.users = this.userService.inactiveUsers;
  }

  onSetToActive(id: number) {
   this.userService.onSetToActive(id);
  }
}
