import { DatePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ejemplo10',
  imports: [DatePipe, UpperCasePipe],
  templateUrl: './ejemplo10.html',
  styleUrl: './ejemplo10.css',
})
export class Ejemplo10 {
hoy = new Date();
nombre = 'aaaaaaaaaaaah';
}
