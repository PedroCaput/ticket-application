import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavigationService } from 'src/app/service/navigation.service';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  email = '';
  password = '';
  remember = false;

  onSubmit(event: Event) {
    event.preventDefault();
    console.log('Login:', {
      email: this.email,
      password: this.password,
      remember: this.remember
    });

    // Aqui você pode redirecionar para outra rota, autenticar, etc.

  }
  constructor(public navigation: NavigationService) {};
}
