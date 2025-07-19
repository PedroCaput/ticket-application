import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "src/app/components/header/header.component";
import { FooterComponent } from "src/app/components/footer/footer.component";
import { ListingInfoComponent } from "src/app/components/listing-info/listing-info.component";

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent, ListingInfoComponent],
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent {

}
