import { StatusEnum } from '../enums/status.enum';

export class Account {
  constructor(public name: string, public status: StatusEnum) {}
}
