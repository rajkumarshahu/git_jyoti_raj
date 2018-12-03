import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable, of} from 'rxjs';
import { map, catchError} from 'rxjs/operators';

import { IUser } from './user';


@Injectable()
export class UserServices {

    private  baseUrl = 'api/users';

    constructor(private http: Http) { }

    getUsers(): Observable<IUser[]> {
       return this.get(this.baseUrl);
    }

    getLog(userName: string, password: string): Observable<IUser> {
        if (userName !== '' && password !== '') {
            const url = 'api/users?userName=' + userName + '&password=' + password;
            return this.get(url);
        } else  {
                return of(this.intializeProperty());
        }
    }

    private handleError(error: Response): Observable<any> {
        return Observable.throw(error.json().error || 'Server error');
    }

    private get(url: string): Observable<any> {
        return this.http.get(url)
        .pipe(
            map(this.extractData),
            catchError(this.handleError));
    }

    private extractData(response: Response) {
        const resp = response.json();
        return resp || {};
    }

    intializeProperty(): IUser {
        return {
            id: 0,
            userName: undefined,
            password: undefined,
            isAdmin: false
        };
    }
}
