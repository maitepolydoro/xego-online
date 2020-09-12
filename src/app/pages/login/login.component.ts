import { Component, OnInit } from '@angular/core';
import { PoPageLogin, PoPageLoginCustomField, PoPageLoginLiterals } from '@po-ui/ng-templates';
import { Router } from '@angular/router';
import { Roles } from 'src/app/enums/roles';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login: string;
  logo: string;
  passwordError: string;
  passwordErrors: Array<string>;
  passwordPattern: string;
  productName: string;
  properties: Array<string>;
  recovery: string;
  registerUrl: string;
  customLiterals: PoPageLoginLiterals = {
    attempts: '{0} vez(es) ',
    createANewPasswordNow: 'Melhor criar uma senha nova agora! Você vai poder entrar no sistema logo em seguida.',
    forgotPassword: 'Esqueceu sua senha?',
    forgotYourPassword: 'Esqueceu sua senha?',
    highlightInfo: '',
    iForgotMyPassword: 'Esqueci minha senha',
    ifYouTryHarder: 'Se tentar mais ',
    loginErrorPattern: 'Login obrigatório',
    loginHint: 'Caso não possua usuário entre em contato com o suporte',
    loginLabel: 'Insira seu usuário',
    loginPlaceholder: 'Insira seu usuário de acesso',
    passwordErrorPattern: 'Senha obrigatória',
    passwordLabel: 'Insira sua senha',
    passwordPlaceholder: 'Insira sua senha de acesso',
    customFieldErrorPattern: 'Campo customizado inválido',
    customFieldPlaceholder: 'Por favor insira um valor',
    registerUrl: 'Novo registro',
    rememberUser: 'Lembrar usuário',
    rememberUserHint: 'Esta opção pode ser desabilitada nas configurações do sistema',
    submitLabel: 'Acessar sistema',
    submittedLabel: 'Carregando...',
  };

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  
  loginSubmit(formData: PoPageLogin) {
    let user = {};
    if (formData.login === 'admin' && formData.password === 'admin') {      
      user = {
        user: formData.login,
        role: Roles.administrator
      } 
      
      localStorage.setItem('user', JSON.stringify(user));
      this.router.navigate(['/']);
    } else {
      if (formData.login === 'empresa' && formData.password === '1234') {
        user = {
          user: formData.login,
          role: Roles.employer
        } 
      } else {
        if (formData.login === 'hotel' && formData.password === '1234') {
          user = {
            user: formData.login,
            role: Roles.hotel
          } 
        } else {
          user = {
            user: formData.login,
            role: Roles.employee
          } 
        }
      }

      localStorage.setItem('user', JSON.stringify(user));
      this.router.navigate(['/']);
    }
  }
}
