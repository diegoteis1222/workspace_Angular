import { Component, input, Input } from '@angular/core';

@Component({
  selector: 'app-ejemplo12-hijo',
  imports: [],
  templateUrl: './ejemplo12-hijo.html',
  styleUrl: './ejemplo12-hijo.css',
})
export class Ejemplo12Hijo {
  // forma antigua:
  //@Input() nombre: string = '';

  nombre = input.required();
  color = input('red');
}
