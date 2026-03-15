import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';
import { LoginVm } from '../../../../model/account/login-vm';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  listUsers = new Array<any>();

  constructor(private router: Router) {}

  login(autenticationData: LoginVm): Observable<any> {
    if (
      autenticationData.userName === 'admin' &&
      autenticationData.password === '123'
    ) {
      const fakeToken =
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.' +
        'eyJzdWIiOiIxIiwibmFtZSI6ImFkbWluIiwiZXhwIjoyNTM0MDIzMDA3fQ.' +
        'fake-signature';

      localStorage.setItem('access_token', fakeToken);

      return of({ token: fakeToken });
    }

    return throwError(() => ({
      message: 'Usuário ou senha inválidos',
    }));
  }

  logout() {
    localStorage.removeItem('access_token');
    return this.router.navigate(['login']);
  }

  public authenticated(): boolean {
    const token = localStorage.getItem('access_token');
    if (!token) return false;

    const jwtHelper = new JwtHelperService();
    try {
      return !jwtHelper.isTokenExpired(token);
    } catch {
      return false;
    }
  }

  register(data: any) {
    this.listUsers.push({ ...data });
    console.log(this.listUsers);
  }
}
