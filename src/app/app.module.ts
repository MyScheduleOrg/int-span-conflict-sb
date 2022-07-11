import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMomentDateModule } from "@angular/material-moment-adapter";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { KENDO_INPUT_PROVIDER } from "@progress/kendo-angular-dateinputs/calendar/calendar.component";

import { SpanConflictTestComponent } from './span-conflict-test/span-conflict-test.component';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';


@NgModule({
  declarations: [
    AppComponent,
    SpanConflictTestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatMomentDateModule,
    DateInputsModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
