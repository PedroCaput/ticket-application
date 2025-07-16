import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit, OnDestroy {
  imagens = [
    'assets/banner-maiara-e-maraisa.webp',
    'assets/banner-marcos-e-belutti.webp',
    'assets/banner-simplifica-festival.webp'
  ];

  slideAtual = 0;
  intervalo: any;

  ngOnInit(): void {
    this.iniciarCarrossel();
  }

  ngOnDestroy() {
    clearInterval(this.intervalo);
  }

  iniciarCarrossel() {
    this.intervalo = setInterval(() => this.proximo(), 2500); // muda a cada 1,5 segundo 
  }

  proximo() {
    this.slideAtual = (this.slideAtual + 1) % this.imagens.length;
  }

  anterior() {
    this.slideAtual = (this.slideAtual - 1 + this.imagens.length) % this.imagens.length;
  }

  irParaSlide(index: number){
    this.slideAtual = index;
  }
}
