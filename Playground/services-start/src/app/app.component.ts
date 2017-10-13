import { Component } from '@angular/core';
import {AccountService} from "./common.services/account.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  accounts: {name: string, status: string} [];
  constructor(private accountService: AccountService) {
    this.accounts = accountService.accounts;

    this.accountService.accountUpdated.subscribe((status) => {
      alert("Account updated");
    });
  }
}
