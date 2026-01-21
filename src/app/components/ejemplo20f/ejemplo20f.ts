import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged, map, startWith } from 'rxjs';

@Component({
  selector: 'app-ejemplo20f',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './ejemplo20f.html',
  styleUrl: './ejemplo20f.css',
})
export class Ejemplo20f {
  productos = ['tu madre', 'paco', 'pepe'];
  searchControl = new FormControl('');

  filtros$ = this.searchControl.valueChanges.pipe(
    startWith(''),
    map((text) => text?.trim().toLocaleLowerCase()),
    map((text) =>
      this.productos.filter((producto) => producto.toLocaleLowerCase().includes(text || ''))
    ),
    distinctUntilChanged(),
    debounceTime(1000)
  );
}
