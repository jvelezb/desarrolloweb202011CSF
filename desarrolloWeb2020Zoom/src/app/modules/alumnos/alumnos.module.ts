import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddAlumnoComponent } from './components/add-alumno/add-alumno.component';
import { ListaAlumnosComponent } from './components/lista-alumnos/lista-alumnos.component';
import {AlumnosRoutingModule} from './alumnos-routing.module';



@NgModule({
  declarations: [AddAlumnoComponent, ListaAlumnosComponent,AddAlumnoComponent],
  imports: [
    CommonModule,
    AlumnosRoutingModule
  ]

})
export class AlumnosModule { }
