import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-ejemplo19',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './ejemplo19.html',
  styleUrls: ['./ejemplo19.css'],
})
export class Ejemplo19 implements OnInit {
  formBuilder = inject(FormBuilder);

  form!: FormGroup;

  ngOnInit() {
    this.form = this.formBuilder.group({
      nombre: ['Juan', [Validators.required, Validators.minLength(3)]],
      email: [''],
    });
  }

  handleSubmit() {
    if (this.form.invalid) {
      return;
    }
    const { nombre, email } = this.form.value;
    alert(`Enviado: ${nombre}, ${email}`);
  }
}
