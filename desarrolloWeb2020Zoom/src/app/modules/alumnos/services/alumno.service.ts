import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { Alumno } from '../models/alumno';
import {
  HttpClient,
  HttpHeaders,
  HttpResponse,
  HttpErrorResponse,
} from '@angular/common/http';

import { map, retry, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AlumnoService {
  endpoint = 'http://localhost:8080/api/alumnos';

  alumnos: Alumno[];

  getAlumnos(): Observable<any> {
    console.log('estoy en el getALumnos');
    var headerDict = {
      'Content-Type': 'application/json',
      Accept: '*/*',
      'Access-Control-Allow-Origin': '*',
    };

    const requestOptions = {
      headers: new HttpHeaders(headerDict),
    };

    return this.http.get(this.endpoint, requestOptions);
  }

  getrAlumno(matricula) {
    return this.http.get(this.endpoint + '/' + matricula);
  }

  private extractData(res: Response) {
    let body = res;
    return body || {};
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errorsi
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

  addAlumno(al: Alumno): void {
    this.alumnos.push(al);
  }

  edit(al: Alumno) {}

  constructor(private http: HttpClient) {
    //alumno[]//file
  }
}
