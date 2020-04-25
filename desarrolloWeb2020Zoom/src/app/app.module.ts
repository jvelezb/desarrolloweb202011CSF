import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TituloPrincipalComponent } from './main-components/titulo-principal/titulo-principal.component';
import { TercerComponenteComponent } from './main-components/tercer-componente/tercer-componente.component';
import { AppRoutingModule} from './app-routing.module';
import { PageNotFoundComponent } from './main-components/page-not-found/page-not-found.component';
import { ProfesoresModule } from './modules/profesores/profesores.module';
import { AlumnosModule} from './modules/alumnos/alumnos.module';

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
    AppRoutingModule,
    AlumnosModule,
    ProfesoresModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
