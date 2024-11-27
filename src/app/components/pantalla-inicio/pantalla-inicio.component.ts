import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-pantalla-inicio',
  templateUrl: './pantalla-inicio.component.html',
  styleUrls: ['./pantalla-inicio.component.css'],
  standalone: true,
  imports: [ReactiveFormsModule],
})
export class PantallaInicioComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.form = this.fb.group({
      tipoDocumento: ['', Validators.required],
      numeroDocumento: [
        '',
        [Validators.required, Validators.pattern(/^\d+$/), Validators.minLength(8), Validators.maxLength(11)],
      ],
    });
  }

  get isFormValid(): boolean {
    return this.form.valid;
  }

  buscar(): void {
    const data = this.form.value;
    this.router.navigate(['/resumen'], { state: { data } });
  }
}
