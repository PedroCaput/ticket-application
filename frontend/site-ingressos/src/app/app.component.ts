import { Component } from '@angular/core';
import { BannerComponent } from './components/banner/banner.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { ListingComponent } from './components/listing/listing.component';
import { LocationComponent } from './components/location/location.component';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [
    BannerComponent,
    FeedbackComponent,
    FooterComponent,
    HeaderComponent,
    ListingComponent,
    LocationComponent,
    RouterModule
],
})
export class AppComponent {
  title = 'home';

  constructor(private router: Router) {}
}
