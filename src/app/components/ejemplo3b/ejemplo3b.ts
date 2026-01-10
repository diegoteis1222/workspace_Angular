import { Component } from '@angular/core';

@Component({
  selector: 'app-ejemplo3b',
  imports: [],
  templateUrl: './ejemplo3b.html',
  styleUrl: './ejemplo3b.css',
})
export class Ejemplo3b {
  profesores = ['Juan', 'Pedro', 'Maria'];

  productos = [
    {nombre: 'Producto 1', precio: 100},
    {nombre: 'Producto 2', precio: 200},
    {nombre: 'Producto 3', precio: 300}
  ]

  usuario = {
    nombre: 'Juan',
    apellidos: 'Pendejo cronico',
    edad: 30
  }
}
