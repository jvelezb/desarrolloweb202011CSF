import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import  {PageNotFoundComponent} from './main-components/page-not-found/page-not-found.component';

const routes: Routes =[
  {path:'alumnos',loadChildren:'./modules/alumnos/alumnos.module#AlumnosModule'},
  {path:'profesores',loadChildren:'./modules/profesores/profesores.module#ProfesoresModule'},
  {path: '**',component:PageNotFoundComponent}
];




@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes,{enableTracing: true}),

  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
