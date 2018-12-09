import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpServices } from '../service/http-service';
import { IUser } from './user';

@Injectable()
export class UserServices {

    private url = 'http://localhost:3000/api/user';

    constructor(private service: HttpServices,
        ) { }
    getUser(userName: string, password: string): Observable<IUser> {
        this.url = this.url + '/' + userName + '/' + password;
        return this.service.get(this.url);
    }
}

