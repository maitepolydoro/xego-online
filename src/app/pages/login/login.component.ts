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
        user = {
          user: formData.login,
          role: Roles.employee
        } 
      }

      localStorage.setItem('user', JSON.stringify(user));
      this.router.navigate(['/']);
    }
  }
}
