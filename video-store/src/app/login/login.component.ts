import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthguardGuard } from '../authguard.guard';
import { IUser } from './user';
import { UserServices } from './user.services';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private url: string = '' ;
  private iUser:  IUser[];
  private userModel: IUser = {
    id: 0,
    userName: '',
    password: '',
    isAdmin: false
  };

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserServices,
    private autoguard: AuthguardGuard
  ) { }

  ngOnInit() {
    this.url = this.route.snapshot.queryParamMap['returnUrl'] || '/video';
  }

  onLogin() {
    this.userService.getLog(this.userModel.userName, this.userModel.password).
    subscribe( p => {
      this.userModel = p[0];
      localStorage.setItem('isLoged', String(this.userModel.isAdmin));
      localStorage.setItem('userName', String(this.userModel.userName));
      this.autoguard.isLoged = true;
      this.autoguard.userName = this.userModel.userName;
      this.router.navigate([this.url]);
    }, error => {
      console.log('error: coouldnot found !');
    });
  }
}
