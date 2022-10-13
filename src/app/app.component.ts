import { Component, TemplateRef, VERSION, ViewChild } from '@angular/core';
import { Account } from './models/Account';
import { Conditioner } from './models/Conditioner';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  @ViewChild('accountTemplate') accountTemplate: TemplateRef<HTMLElement>;
  @ViewChild('conditioneremplate')
  conditionerTemplate: TemplateRef<HTMLElement>;

  public accountData: Account[];
  public conditionerData: Conditioner[];

  constructor() {
    this.setupAccounts();
    this.setupConditioners();

    console.log(this.accountTemplate);
  }

  private setupAccounts() {
    const a1 = new Account();
    a1.name = "Bill's Account";
    a1.person = 'Bill';

    const a2 = new Account();
    a2.name = "Tom's Account";
    a2.person = 'Tom';

    this.accountData = [a1, a2];
  }

  private setupConditioners() {
    const c1 = new Conditioner();
    c1.name = "Bill's Conditioner";
    c1.owner = 'Bill';

    const c2 = new Conditioner();
    c2.name = "Tom's Conditioner";
    c2.owner = 'Tom';

    this.conditionerData = [c1, c2];
  }
}
