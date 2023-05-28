import { Account } from '../shared/models/Account';
import { StatusEnum } from '../shared/enums/status.enum';
import { Injectable } from '@angular/core';
import { LoggingService } from './logging.service';

@Injectable()
export class AccountsService {
  constructor(private loggingService: LoggingService) {}

  private _accounts: Account[] = [
    new Account('Master Account', StatusEnum.active),
    new Account('Test Account', StatusEnum.inactive),
    new Account('Hidden Account', StatusEnum.unknown),
  ];

  public get accounts() {
    return this._accounts;
  }

  public addAccount(name: string, status: StatusEnum) {
    this.loggingService.logStatusChange(status);
    this._accounts.push(new Account(name, status));
  }

  public updateAccountState(index: number, newStatus: StatusEnum) {
    this._accounts[index].status = newStatus;
    this.loggingService.logStatusChange(newStatus);
  }
}
