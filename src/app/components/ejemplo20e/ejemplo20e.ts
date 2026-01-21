import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-ejemplo20e',
  imports: [CommonModule],
  templateUrl: './ejemplo20e.html',
  styleUrl: './ejemplo20e.css',
})
export class Ejemplo20e {
  resultado$ = of(5).pipe(
    
  )
}
