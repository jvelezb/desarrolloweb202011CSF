import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TituloPrincipalComponent } from './titulo-principal/titulo-principal.component';
import { TercerComponenteComponent } from './tercer-componente/tercer-componente.component';
import { AppRoutingModule} from './app-routing.module';
import { PageNotFoundComponent } from './main-components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    TituloPrincipalComponent,
    TercerComponenteComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
