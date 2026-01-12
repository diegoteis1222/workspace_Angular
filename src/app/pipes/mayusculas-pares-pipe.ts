import { Pipe, PipeTransform } from '@angular/core';
import { map } from 'rxjs';

@Pipe({
  name: 'mayusculasPares',
})
export class MayusculasParesPipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): string {
    let letras = value.split('');
    let arrayLetras = letras.map((letra, index) =>
      index % 2 === 0 ? letra.toUpperCase() : letra.toLowerCase()
    );
    return arrayLetras.join('');
  }
}
