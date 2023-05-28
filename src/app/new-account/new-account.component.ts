import { Component, EventEmitter, Output } from '@angular/core';
import { LoggingService } from '../services/logging.service';
import { AccountsService } from '../services/accounts.service';
import { StatusEnum } from '../shared/enums/status.enum';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
})
export class NewAccountComponent {
  @Output() accountAdded = new EventEmitter<{ name: string; status: string }>();
  protected readonly StatusEnum = StatusEnum;

  constructor(
    private loggingService: LoggingService,
    private accountService: AccountsService
  ) {}

  onCreateAccount(accountName: string, accountStatus: string) {
    let status = accountStatus as StatusEnum;
    this.accountService.addAccount(accountName, status);
  }
}
