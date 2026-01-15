import { Component, inject } from '@angular/core';
import { RickymortoService } from '../../services/rickymorto-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ejemplo14b',
  imports: [CommonModule],
  templateUrl: './ejemplo14b.html',
  styleUrl: './ejemplo14b.css',
})
export class Ejemplo14b {

  rickymortoService = inject(RickymortoService);

  pendejos$ = this.rickymortoService.getAll();

}
