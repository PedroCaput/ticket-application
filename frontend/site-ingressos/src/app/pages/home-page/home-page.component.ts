import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { BannerComponent } from 'src/app/components/banner/banner.component';
import { ListingComponent } from 'src/app/components/listing/listing.component';
import { FooterComponent } from 'src/app/components/footer/footer.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    BannerComponent,
    ListingComponent,
    FooterComponent
  ],
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {

}
