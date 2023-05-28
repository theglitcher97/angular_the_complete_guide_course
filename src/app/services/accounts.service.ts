import { Account } from '../shared/models/Account';
import { StatusEnum } from '../shared/enums/status.enum';

export class AccountsService {
  private _accounts: Account[] = [
    new Account('Master Account', StatusEnum.active),
    new Account('Test Account', StatusEnum.inactive),
    new Account('Hidden Account', StatusEnum.unknown),
  ];

  public get accounts() {
    return this._accounts;
  }

  public addAccount(name: string, status: StatusEnum) {
    this._accounts.push(new Account(name, status));
    console.log(this._accounts);
  }

  public updateAccountState(index: number, newStatus: StatusEnum) {
    this._accounts[index].status = newStatus;
  }
}
