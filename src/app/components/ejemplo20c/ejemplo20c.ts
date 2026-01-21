import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { map, of } from 'rxjs';

@Component({
  selector: 'app-ejemplo20c',
  imports: [CommonModule],
  templateUrl: './ejemplo20c.html',
  styleUrl: './ejemplo20c.css',
})
export class Ejemplo20c {
  precioConIva$ = of(100).pipe(
    map((precioSinIva) => precioSinIva * 1.21),
    map((precioSinIva) => precioSinIva.toFixed(2)),
    map((precioSinIva) => precioSinIva + '€')
  );
}
