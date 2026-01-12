import { Component } from '@angular/core';

@Component({
  selector: 'app-ejemplo08',
  imports: [],
  templateUrl: './ejemplo08.html',
  styleUrl: './ejemplo08.css',
})
export class Ejemplo08 {
  resultado: number = 0;

sumar(numero1:number, numero2:number) {
  this.resultado = numero1 + numero2;
}
}
