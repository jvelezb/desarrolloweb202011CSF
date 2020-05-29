import { Component, OnInit } from '@angular/core';
import { Alumno } from '../../models/alumno';
import { AlumnoService } from '../../services/alumno.service';

@Component({
  selector: 'app-add-alumno',
  templateUrl: './add-alumno.component.html',
  styleUrls: ['./add-alumno.component.scss'],
})
export class AddAlumnoComponent implements OnInit {
  nombreAlumno: string = 'Juan Velez';

  alumnos: Alumno[];
  constructor(public alumnoService: AlumnoService) {}

  ngOnInit(): void {
    this.obtenerAlumnos();
  }

  obtenerAlumnos() {
    this.alumnoService.getAlumnos().subscribe((data) => {
      this.alumnos = data;
      console.log('respuesta de alumno->' + this.alumnos);
    });
  }

  sumar() {
    this.nombreAlumno = this.nombreAlumno + 'hola';
  }
}
