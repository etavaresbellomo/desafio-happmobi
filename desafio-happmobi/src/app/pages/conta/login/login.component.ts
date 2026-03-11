import { Component } from '@angular/core';
import { LoginVm } from '../../../api/model/conta/login-vm';
import { ImportacaoCompartilhada } from '../../../shared/importacao-compartilhada';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ImportacaoCompartilhada],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  login = new LoginVm();

  onLogin(){
    console.log('dados de autenticaçao capturados',this.login)
  }
}
