import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot,Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class AuthguardGuard implements CanActivate {
  public userName: string = '';
  constructor(private router : Router){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (localStorage.getItem('isLoged') == 'true') {
      this.userName = localStorage.getItem('userName');
      return true;
    }
    else {
      //this.router.navigate(['login'], { queryParams: { returnUrl: state.url }});
      this.userName = '';
      return false;
    }
  }
}