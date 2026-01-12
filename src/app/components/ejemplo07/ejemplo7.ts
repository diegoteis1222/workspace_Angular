import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ejemplo7',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ejemplo7.html',
  styleUrls: ['./ejemplo7.css'],
})
export class Ejemplo7 {
  theme = 'pastel';
}
