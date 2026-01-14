import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-ejemplo13-hijo',
  imports: [],
  templateUrl: './ejemplo13-hijo.html',
  styleUrl: './ejemplo13-hijo.css',
})
export class Ejemplo13Hijo {
  @Output() pedirDineros = new EventEmitter<number>();

  pedirDinerosPadre(cantidad: number) {
    this.pedirDineros.emit(cantidad);
  }
}
