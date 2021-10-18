import {NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {GoogleChartsModule} from 'angular-google-charts';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import { ModuloHistoryComponent } from './modulo-history/modulo-history.component';

@NgModule({
  declarations: [
    AppComponent,
    ModuloHistoryComponent
  ],
  imports: [
    BrowserModule,
    GoogleChartsModule,
    NoopAnimationsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
