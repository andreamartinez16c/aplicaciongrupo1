import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { Prueba1Component } from './components/prueba1/prueba1.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Prueba1Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
