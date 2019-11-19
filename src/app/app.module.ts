import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarteleraComponent } from './pgs/cartelera/cartelera.component';
import { CiudadComponent } from './pgs/ciudad/ciudad.component';
import { ConfiguracionComponent } from './pgs/configuracion/configuracion.component';
import { EmpleadoComponent } from './pgs/empleado/empleado.component';
import { FormatoComponent } from './pgs/formato/formato.component';
import { FuncionComponent } from './pgs/funcion/funcion.component';
import { MenuComponent } from './pgs/menu/menu.component';
import { OpcionComponent } from './pgs/opcion/opcion.component';
import { PeliculaComponent } from './pgs/pelicula/pelicula.component';
import { ReservaComponent } from './pgs/reserva/reserva.component';
import { RolComponent } from './pgs/rol/rol.component';
import { SalaComponent } from './pgs/sala/sala.component';
import { SillaComponent } from './pgs/silla/silla.component';
import { SucuralComponent } from './pgs/sucural/sucural.component';

@NgModule({
  declarations: [
    AppComponent,
    CarteleraComponent,
    CiudadComponent,
    ConfiguracionComponent,
    EmpleadoComponent,
    FormatoComponent,
    FuncionComponent,
    MenuComponent,
    OpcionComponent,
    PeliculaComponent,
    ReservaComponent,
    RolComponent,
    SalaComponent,
    SillaComponent,
    SucuralComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
