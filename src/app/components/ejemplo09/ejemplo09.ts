import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ejemplo09',
  imports: [FormsModule],
  templateUrl: './ejemplo09.html',
  styleUrl: './ejemplo09.css',
})
export class Ejemplo09 {
  email: string = '';
  password: string = '';

  handleLogin() {
    alert('Email: ' + this.email + '\nPassword: ' + this.password);
  }
}
