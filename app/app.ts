import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Menu } from './menu/menu';
import { Inicio } from './inicio/inicio';
import { Servicios } from './servicios/servicios';
import { Carrusel } from './carrusel/carrusel';
import { Contacto } from './contacto/contacto';
import { Presentacion } from './presentacion/presentacion';
import { TarjetaPresentacion } from './tarjeta-presentacion/tarjeta-presentacion';




@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Menu, Inicio, Servicios, Carrusel, Contacto, Presentacion,TarjetaPresentacion],
  templateUrl: './app.html',
  styleUrl: './app.css',
  standalone: true
})

export class App {
  protected title = 'CreativePixel';
}
