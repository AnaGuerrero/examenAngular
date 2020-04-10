import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormularioComponent } from './formulario/formulario.component';
import { ReproductorComponent } from './reproductor/reproductor.component';

const routes: Routes = [
  {path: 'formulario', component: FormularioComponent},
  {path: 'reproductor', component: ReproductorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
