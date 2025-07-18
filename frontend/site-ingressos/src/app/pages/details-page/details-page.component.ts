import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "src/app/components/header/header.component";
import { FooterComponent } from "src/app/components/footer/footer.component";
import { DetailsComponent } from "src/app/components/details/details.component";

@Component({
  selector: 'app-details-page',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent, DetailsComponent],
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.css']
})
export class DetailsPageComponent {

}
