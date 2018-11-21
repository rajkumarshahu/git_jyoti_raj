import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AuthguardGuard } from './authguard.guard';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Video Store';
  
  isLoged: boolean = false;
  userName: string = '';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private autoguard: AuthguardGuard
  ) {
  }
  

  onLogout() {
    localStorage.clear();
    this.router.navigate(['/home']);
  }

}
