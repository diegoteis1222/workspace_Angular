import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-ejemplo20a',
  imports: [CommonModule],
  templateUrl: './ejemplo20a.html',
  styleUrl: './ejemplo20a.css',
})
export class Ejemplo20a {
  mensaje$ = of('AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH');

  // ----- Forma vieja(necesita implementar OnInit) -----
  // mensaje = '';

  // ngOnInit(): void {
  //   this.mensaje$.subscribe(m => this.mensaje = m);  
  // }
}
