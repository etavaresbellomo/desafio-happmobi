import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Imports } from '../../../shared/modules/import';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { LoginVm } from '../../../api/model/account/login-vm';
import { AuthService } from '../../../api/module/erp/services/auth/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [Imports],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent implements OnInit {
  formRegister!: FormGroup;
  samePassword: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.formRegister = this.formBuilder.group({
      user: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      confirmPassword: new FormControl('', [Validators.required]),
    });
  }

  onChange(): void {
    const password = this.formRegister.get('password')?.value;
    const confirmPassword = this.formRegister.get('confirmPassword')?.value;

    this.samePassword = password === confirmPassword;
    if (!this.samePassword) {
      console.error('Senhas não são iguais, por favor insira novamente!');
      this.formRegister.controls['password'].reset();
      this.formRegister.controls['confirmPassword'].reset();
      return;
    }
  }

  onRegister() {
    if (this.formRegister.invalid) {
      console.error('Preencha todos os campos antes de continuar!');
      return;
    }

    const data: LoginVm = {
      userName: this.formRegister.controls['user'].value,
      password: this.formRegister.controls['password'].value,
    };

    this.authService.register(data);
    this.router.navigate(['auth/login']);

    console.log('Usuário criado com sucesso!');
    console.log(data);
  }
}
