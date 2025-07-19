import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "src/app/components/header/header.component";
import { FooterComponent } from "src/app/components/footer/footer.component";
import { ListingInfoComponent } from "src/app/components/listing-info/listing-info.component";

@Component({
  selector: 'app-about-page',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent, ListingInfoComponent],
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.css']
})
export class AboutPageComponent {

}
