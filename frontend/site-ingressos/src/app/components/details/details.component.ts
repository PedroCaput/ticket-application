import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MOCK_EVENTS } from 'src/app/mock-events';
import { EventDetails } from 'src/app/event-details';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  event!: EventDetails;
  safeMapUrl!: SafeResourceUrl;

  constructor(
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    const slug = this.route.snapshot.paramMap.get('slug');
    if (slug) {
      const found = MOCK_EVENTS.find(e => this.slugify(e.name) === slug);
      if (found) {
        this.event = found;
        this.safeMapUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
          `https://www.google.com/maps?q=${found.address}&output=embed`
        )
      } else {
        console.error('Evento não encontrado');
      }
    }
  }

  private slugify(text: string): string {
    return text
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '') // remove acentos
      .replace(/\s+/g, '-')
      .replace(/[^\w-]/g, '');
  }
}
