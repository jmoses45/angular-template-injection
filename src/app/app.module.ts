import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { CardListComponent } from './card-list/card-list.component';
import { AccountCardComponent } from './account-card/account-card.component';
import { ConditionerCardComponent } from './conditioner-card/conditioner-card.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [BrowserModule, CommonModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    CardListComponent,
    AccountCardComponent,
    ConditionerCardComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
