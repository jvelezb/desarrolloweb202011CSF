import { Injectable } from '@angular/core';
import {Observable, of } from 'rxjs';
import { Alumno } from '../models/alumno';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {
  alumnos:Alumno[];

  getAlumnos():Observable<Alumno[]>{
     this.alumnos = [new Alumno(12,'Juan','ITC'),
                          new Alumno(14,'Jose','ITC'),
                          new Alumno(15,'Susana','ITC')];
    return of(this.alumnos);
  }

  addAlumno(al: Alumno):void{
    this.alumnos.push(al)
  }

  edit(al:Alumno){

  }



  constructor() {
    alumno[]//file
   }
}
