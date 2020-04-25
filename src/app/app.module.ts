import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PoliticasComponent } from './politicas/politicas.component';
import {FormsModule,ReactiveFormsModule}  from '@angular/forms'
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    PoliticasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
