import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PantallaInicioComponent } from './components/pantalla-inicio/pantalla-inicio.component';
import { PantallaResumenComponent } from './components/pantalla-resumen/pantalla-resumen.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PantallaInicioComponent,
    PantallaResumenComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
