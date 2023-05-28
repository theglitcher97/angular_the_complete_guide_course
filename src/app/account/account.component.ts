import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AccountsService } from '../services/accounts.service';
import { StatusEnum } from '../shared/enums/status.enum';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
})
export class AccountComponent {
  @Input() account!: { name: string; status: string };
  @Input() id!: number;
  @Output() statusChanged = new EventEmitter<{
    id: number;
    newStatus: string;
  }>();
  protected readonly StatusEnum = StatusEnum;

  constructor(private accountService: AccountsService) {}

  onSetTo(status: StatusEnum) {
    this.accountService.updateAccountState(this.id, status);
    this.statusChanged.emit({ id: this.id, newStatus: status });
  }
}
