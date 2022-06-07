import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { H1Component } from './h1/h1.component';
import { PComponent } from './p/p.component';
import { H2Component } from './h2/h2.component';

@NgModule({
  declarations: [
    AppComponent,
    H1Component,
    PComponent,
    H2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
