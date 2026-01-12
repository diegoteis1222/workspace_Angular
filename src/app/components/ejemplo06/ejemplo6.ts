import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ejemplo6',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ejemplo6.html',
  styleUrls: ['./ejemplo6.css'],
})
export class Ejemplo6 {
  url =
    'https://www.google.com/url?sa=t&source=web&rct=j&url=https%3A%2F%2Fwww.shutterstock.com%2Fes%2Fimage-photo%2Fsitting-horse-lipizzaner-114732037&ved=0CBYQjRxqFwoTCMDI162Z_pEDFQAAAAAdAAAAABAe&opi=89978449';
  width: number = 200;
}
