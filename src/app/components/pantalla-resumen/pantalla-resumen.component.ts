import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pantalla-resumen',
  templateUrl: './pantalla-resumen.component.html',
  styleUrls: ['./pantalla-resumen.component.css'],
  standalone: true
})
export class PantallaResumenComponent {
  cliente: any;

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    this.cliente = navigation?.extras.state?.['data'];
  }

  volver(): void {
    this.router.navigate(['/']);
  }
}
