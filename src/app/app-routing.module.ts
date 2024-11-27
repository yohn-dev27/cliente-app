import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PantallaInicioComponent } from './components/pantalla-inicio/pantalla-inicio.component';
import { PantallaResumenComponent } from './components/pantalla-resumen/pantalla-resumen.component';


const routes: Routes = [
  { path: '', component: PantallaInicioComponent },
  { path: 'resumen', component: PantallaResumenComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
