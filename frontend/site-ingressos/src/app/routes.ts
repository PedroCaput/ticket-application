import { Routes } from '@angular/router';
import { CheckoutPageComponent } from './pages/checkout-page/checkout-page.component';
import { DetailsPageComponent } from './pages/details-page/details-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { CarshopPageComponent } from './pages/carshop-page/carshop-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

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
        path: 'detalhes',
        component: DetailsPageComponent,
        title: 'Mais Detalhes'
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
    }
];

export default routeConfig;