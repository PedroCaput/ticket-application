import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MOCK_EVENTS } from 'src/app/mock-events';
import { EventDetails } from 'src/app/event-details';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-listing',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})

export class ListingComponent {
  events: EventDetails[] = MOCK_EVENTS;

  slugify(text: string): string {
    return text
      .toLowerCase()
      .normalize('NFD')                 // Remove acentos
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/\s+/g, '-')            // Espaço => traço
      .replace(/[^\w-]/g, '');         // Remove caracteres especiais
  }
}
