import { BaseRecord } from './BaseRecord';

export class Account extends BaseRecord {
  public person: string;

  constructor() {
    super();

    this.person = '';
  }
}
