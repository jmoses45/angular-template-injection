import { Component, Input } from '@angular/core';
import { Conditioner } from '../models/Conditioner';

@Component({
  selector: 'app-conditioner-card',
  templateUrl: './conditioner-card.component.html',
  styleUrls: ['./conditioner-card.component.css'],
})
export class ConditionerCardComponent {
  @Input() conditioner: Conditioner;

  constructor() {}
}
