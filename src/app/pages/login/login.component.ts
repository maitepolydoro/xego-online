import { Component, OnInit } from '@angular/core';
import { PoPageLogin, PoPageLoginCustomField, PoPageLoginLiterals } from '@po-ui/ng-templates';
import { Router } from '@angular/router';


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
    if (formData.login === 'admin' && formData.password === 'admin') {      
      const user = {
        user: formData.login
      } 
      localStorage.setItem('user', JSON.stringify(user));
      this.router.navigate(['/']);
    } else {

    }
  }
}
