import { Component } from '@angular/core';
import { RickymortoService } from '../../services/rickymorto-service';
import { CommonModule } from '@angular/common';
import { PendejoCharacter } from '../../models/Pendejo';


@Component({
  selector: 'app-ejemplo14',
  imports: [CommonModule],
  templateUrl: './ejemplo14.html',
  styleUrl: './ejemplo14.css',
})
export class Ejemplo14 {
  pendejos: PendejoCharacter[] = [];
  
  constructor(private rickymortoService: RickymortoService) {
    this.rickymortoService.getAll().subscribe((pendejos) => {
      console.log(pendejos);
      this.pendejos = pendejos.results as PendejoCharacter[];
    });
  }
}
