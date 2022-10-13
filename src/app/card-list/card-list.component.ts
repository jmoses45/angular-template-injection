import { Component, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css'],
})
export class CardListComponent {
  @Input() template: TemplateRef<HTMLElement>;

  constructor() {}
}
