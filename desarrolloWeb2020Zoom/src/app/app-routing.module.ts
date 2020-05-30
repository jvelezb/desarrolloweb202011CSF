import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './main-components/page-not-found/page-not-found.component';
import { PerfilComponent } from './main-components/perfil/perfil.component';
import { AuthGuard } from './guards/auth.guard';
const routes: Routes = [
  {
    path: 'alumnos',
    loadChildren: './modules/alumnos/alumnos.module#AlumnosModule',
  },
  {
    path: 'profesores',
    loadChildren: './modules/profesores/profesores.module#ProfesoresModule',
  },
  {
    path: 'perfil',
    component: PerfilComponent,
    canActivate: [AuthGuard],
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
