import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  constructor(private router: Router) { }


  canActivate(route: ActivatedRouteSnapshot): boolean {
    if (localStorage.getItem('user')) {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
}
