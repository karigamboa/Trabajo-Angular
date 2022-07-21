import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JuegosComponent } from './juegos/juegos.component';
import { DetallesComponent } from './detalles/detalles.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { TarjetaComponent } from './tarjeta/tarjeta.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BannerComponent } from './banner/banner.component';

@NgModule({
  declarations: [
    AppComponent,
    JuegosComponent,
    DetallesComponent,
    BusquedaComponent,
    TarjetaComponent,
    NavbarComponent,
    BannerComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
