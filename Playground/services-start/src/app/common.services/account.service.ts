import {LoggerService} from "./logger.service";
import {EventEmitter, Injectable} from "@angular/core";

@Injectable()
export class AccountService {

  constructor(private loggerService: LoggerService) {}

  accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Testaccount',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];

  accountUpdated = new EventEmitter<string>();

  onAccountAdded(newAccount: {name: string, status: string}) {
    this.accounts.push(newAccount);
    this.loggerService.logOnStatusChanged(newAccount.status);
  }

  onStatusChanged(updateInfo: {id: number, newStatus: string}) {
    this.accounts[updateInfo.id].status = updateInfo.newStatus;
    this.loggerService.logOnAccountAdded(updateInfo.newStatus);
  }

}
