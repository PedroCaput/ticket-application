import { Routes } from '@angular/router';
import { CheckoutPageComponent } from './pages/checkout-page/checkout-page.component';
import { DetailsPageComponent } from './pages/details-page/details-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { CarshopPageComponent } from './pages/carshop-page/carshop-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { TermsPageComponent } from './pages/terms-page/terms-page.component';

const routeConfig: Routes = [
    {
        path: '',
        component: HomePageComponent,
        title: 'Tickets - Ingressos para uma vida emocionante'
    },
    {
        path: 'checkout',
        component: CheckoutPageComponent,
        title: 'Checkout'
    },
    {
        path: 'detalhes/:slug',
        loadComponent: () =>
            import('./pages/details-page/details-page.component').then(m => m.DetailsPageComponent)
    },
    {
        path: 'login',
        component: LoginPageComponent,
        title: 'Login'
    },
    {
        path: 'carrinho',
        component: CarshopPageComponent,
        title: 'Carrinho de Compras'
    },
    {
        path: 'sobre',
        component: AboutPageComponent,
        title: 'Sobre Nós'
    },
    {
        path: 'contato',
        component: ContactPageComponent,
        title: 'Fale Conosco'
    },
    {
        path: 'termos',
        component: TermsPageComponent,
        title: 'Termos e Políticas'
    },
    {
        path: '**',
        component: HomePageComponent,
        title: 'Tickets - Ingressos para uma vida emocionante'
    }
];

export default routeConfig;