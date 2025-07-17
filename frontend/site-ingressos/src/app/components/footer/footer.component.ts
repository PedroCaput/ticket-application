import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationService } from 'src/app/service/navigation.service';
import { MOCK_EVENTS } from 'src/app/mock-events';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  cidadesUnicas: string[] = [];
  categoriasUnicas: string[] = [];

  ngOnInit() {
      const eventos = MOCK_EVENTS;
      this.cidadesUnicas = Array.from(new Set(eventos.map(e => `${e.city} - ${e.state}`))).sort();
      this.categoriasUnicas = Array.from(new Set(eventos.map(e => e.category || 'Outros'))).sort();
  }
  constructor(public navigation: NavigationService) {}
}
