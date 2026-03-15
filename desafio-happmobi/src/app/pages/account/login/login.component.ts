import { Component } from '@angular/core';
import { LoginVm } from '../../../api/model/account/login-vm';
import { Imports } from '../../../shared/modules/import';
import { AuthService } from '../../../api/module/erp/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [Imports],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  login = new LoginVm();
  errorMessage: string = '';

  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  onLogin() {
    if (!this.login) {
      console.error('Dados de autenticaçao não capturados', this.login);
    } else {
      this.authService.login(this.login).subscribe({
        next: (data: any) => {
          this.router.navigate(['home']);
        },
        error: (err: any) => {
          this.errorMessage = err;
          console.error('Erro ao tentar logar no sistema!', this.errorMessage);
        },
      });
    }
  }
}
