import { Injectable, Input } from '@angular/core';
import { Router } from '@angular/router';
import { EventDetails } from '../event-details';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  @Input() eventoSelecionado!:EventDetails;

  constructor(private router: Router) {}

  voltarParaHome() {
    this.router.navigate(['']);
  }

  irParaLogin() {
    this.router.navigate(['/login']);
  }

  irParaCarrinho() {
    this.router.navigate(['/carrinho']);
  }

  irParaSobre() {
    this.router.navigate(['/sobre']);
  }

  irParaContato() {
    this.router.navigate(['/contato']);
  }

  irParaTermos() {
    this.router.navigate(['/termos']);
  }
}
