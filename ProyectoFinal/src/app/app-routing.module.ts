import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JuegosComponent } from './juegos/juegos.component';
import { DetallesComponent } from './detalles/detalles.component';
import { BusquedaComponent } from './busqueda/busqueda.component';

const routes: Routes = [
  {path:"juegos", component:JuegosComponent},
  {path:"detalles/:value", component:DetallesComponent},
  {path:"busqueda/:id", component:BusquedaComponent},
  {path:"",component:JuegosComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
