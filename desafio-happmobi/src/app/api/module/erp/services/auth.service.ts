import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {  Observable, of, throwError } from 'rxjs';
import { LoginVm } from '../../../model/conta/login-vm';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  constructor(
    private router: Router,
  ) {}

  onLogin(dadosAutenticacao: LoginVm): Observable<any> {

if (
    dadosAutenticacao.userName === 'admin' &&
    dadosAutenticacao.password === '123'
  ) {

   const fakeToken =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.' +
  'eyJzdWIiOiIxIiwibmFtZSI6ImFkbWluIiwiZXhwIjoyNTM0MDIzMDA3fQ.' +
  'fake-signature';

    localStorage.setItem('access_token', fakeToken);

    return of({ token: fakeToken });
  }

  return throwError(() => ({
    message: 'Usuário ou senha inválidos'
  }));
  }

  onLogout(){
    localStorage.removeItem('access_token');
    return this.router.navigate(['login'])
  }

    public estaAutenticado(): boolean {
    const token = localStorage.getItem('access_token')
    if(!token) return false;

    const jwtHelper = new JwtHelperService();
  try {
    return !jwtHelper.isTokenExpired(token);
  } catch {
    return false;
  }
  }
}
