import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MOCK_EVENTS } from 'src/app/mock-events';

@Component({
  selector: 'app-listing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent {
  events = MOCK_EVENTS;
}
