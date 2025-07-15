import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavigationService } from 'src/app/service/navigation.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  usuarioNome: string = ''; // Simule com nome ou deixe vazio
  busca: string = '';

  constructor(public navigation: NavigationService) {}
}
