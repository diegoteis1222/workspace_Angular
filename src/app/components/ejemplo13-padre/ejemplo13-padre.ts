import { Component } from '@angular/core';
import { Ejemplo13Hijo } from '../ejemplo13-hijo/ejemplo13-hijo';

@Component({
  selector: 'app-ejemplo13-padre',
  imports: [Ejemplo13Hijo],
  templateUrl: './ejemplo13-padre.html',
  styleUrl: './ejemplo13-padre.css',
})
export class Ejemplo13Padre {
  mensaje = '';

  darDineros(cantidad: number) {
    this.mensaje = 'Te doy ' + cantidad;
  }
}
