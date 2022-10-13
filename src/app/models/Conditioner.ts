import { BaseRecord } from "./BaseRecord";

export class Conditioner extends BaseRecord {
  public owner: string;

  constructor() {
    super();

    this.owner = "";
  }
}