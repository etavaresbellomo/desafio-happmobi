import { Component } from '@angular/core';
import { LoginVm } from '../../../api/model/conta/login-vm';
import { ImportacaoCompartilhada } from '../../../shared/importacao-compartilhada';
import { AuthService } from '../../../api/module/erp/services/autenticacao/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ImportacaoCompartilhada],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  login = new LoginVm();
  mensagemErro: string = '';

  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  onLogin() {
    if (!this.login) {
      console.error('Dados de autenticaçao não capturados', this.login);
    } else {
      this.authService.onLogin(this.login).subscribe({
        next: (data: any) => {
          let dados = data;
          this.router.navigate(['inicio']);
        },
        error: (err: any) => {
          this.mensagemErro = err;
          console.error('Erro ao tentar logar no sistema!', this.mensagemErro);
        },
      });
    }
  }
}
