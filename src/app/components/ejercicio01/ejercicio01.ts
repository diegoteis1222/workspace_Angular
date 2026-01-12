import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ejercicio01',
  imports: [CommonModule],
  templateUrl: './ejercicio01.html',
  styleUrl: './ejercicio01.css',
})
export class Ejercicio01 {
  numeros = [20, 30, 234, 12, 234234, 234235, 345, 23423, 123124657, 456567534, 2342344654];

  isEven(numero: number): boolean {
    return numero % 2 === 0;
  }
}
