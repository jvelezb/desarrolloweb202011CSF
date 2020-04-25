import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddAlumnoComponent } from './components/add-alumno/add-alumno.component';
import { ListaAlumnosComponent } from './components/lista-alumnos/lista-alumnos.component';



@NgModule({
  declarations: [AddAlumnoComponent, ListaAlumnosComponent],
  imports: [
    CommonModule
  ]
})
export class AlumnosModule { }
