import { Routes } from '@angular/router';
import { Inicio } from './inicio/inicio';
import { Servicios } from './servicios/servicios';
import { Carrusel } from './carrusel/carrusel';
import { Contacto } from './contacto/contacto';
import { Menu } from './menu/menu';
import { Presentacion } from './presentacion/presentacion';
import { TarjetaPresentacion } from './tarjeta-presentacion/tarjeta-presentacion';
 
 
export const routes: Routes = [
  {
    path: 'inicio', component: Inicio
  },
  {
    path: 'servicios', component: Servicios
  },
  {
    path: 'carrusel', component: Carrusel
  },
  {
    path: 'contacto', component: Contacto
  },
  {
    path: 'presentacion', component: Presentacion
  },
  {
    path: 'menu', component: Menu
  },
    {
    path: 'tarjeta-presentacion', component: TarjetaPresentacion
  },
  {
    path:'**', pathMatch: 'full', redirectTo: 'inicio'
  }
  
];
