import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TituloPrincipalComponent } from './titulo-principal/titulo-principal.component';
import { TercerComponenteComponent } from './tercer-componente/tercer-componente.component';


@NgModule({
  declarations: [
    AppComponent,
    TituloPrincipalComponent,
    TercerComponenteComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
