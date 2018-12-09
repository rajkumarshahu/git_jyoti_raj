import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot,Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class AuthguardGuard implements CanActivate {
  public userName: string = '';
  public isLoged: boolean = false;
  constructor(private router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (localStorage.getItem('isLoged') === 'true') {
      this.userName = localStorage.getItem('userName');
      this.isLoged = true;
      return true;
    } else {
      this.userName = '';
      this.isLoged = false;
      this.router.navigate(['/'], { queryParams: { returnUrl: state.url }});
      return false;
    }
  }
}
