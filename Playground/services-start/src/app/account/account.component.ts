import { Component, EventEmitter, Input, Output } from '@angular/core';
import {AccountService} from "../common.services/account.service";
import {LoggerService} from "../common.services/logger.service";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;
  @Output() statusChanged = new EventEmitter<{id: number, newStatus: string}>();

  constructor(private accountService:AccountService, private loggerService: LoggerService) {}

  onSetTo(status: string) {
    this.accountService.onStatusChanged({id: this.id, newStatus: status });
    this.accountService.accountUpdated.emit(status);

  }
}
