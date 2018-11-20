import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

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
    private userService: UserServices
  ) { }

  ngOnInit() {
    this.url = this.route.snapshot.queryParamMap['returnUrl'] || '/';
  }

  onLogin() {
    this.userService.getLog(this.userModel.userName, this.userModel.password).
    subscribe( p => {
      console.log(p);
      ////this.userModel = p[0];
     // localStorage.setItem('isLog', String(this.userModel.isAdmin));
      //this.router.navigate([this.url]);
    }, error => {
      console.log('error: coouldnot found !');
    });
  }
}