import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { LoggingService } from '../services/logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
})
export class NewAccountComponent implements OnInit {
  @Output() accountAdded = new EventEmitter<{ name: string; status: string }>();
  private logginServer!: LoggingService;

  ngOnInit() {
    this.logginServer = new LoggingService();
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountAdded.emit({
      name: accountName,
      status: accountStatus,
    });
    this.logginServer.logStatusChange(accountStatus);
  }
}
