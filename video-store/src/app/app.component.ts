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
  
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private autoguard: AuthguardGuard
  ) {
  }
  

  onLogout() {
    localStorage.clear();
    this.autoguard.userName = "" ;
    this.autoguard.isLoged = false;
    this.router.navigate(['/home']);
  }

}
