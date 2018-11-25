import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable, of} from 'rxjs';
import { map, catchError} from 'rxjs/operators';


@Injectable()
export class HttpServices {

    private baseUrl: 'api';
    private headers = new Headers({ 'Content-Type': 'application/json' });
    private options = new RequestOptions({ headers: this.headers });

    constructor(private http: Http) { }

    private handleError(error: Response): Observable<any> {
      return Observable.throw(error.json().error || 'Server error');
    }

    private extractData(response: Response) {
        const resp = response.json();
        return resp || {};
    }

    // GET
    public get(url: string): Observable<any> {
        console.log(url);
        return this.http.get(url, this.options)
        .pipe(
            map(this.extractData),
            catchError(this.handleError));
    }

    //DELETE
    public delete(url: string): Observable<any> {
        return this.http.delete(url, this.options)
            .pipe(
                map(this.extractData),
                catchError(this.handleError)
            );
    }

    //POST
    public post(url: string, data: any): Observable<any> {
        console.log(url);
        console.log(data);
        return this.http.post(url, data, this.options)
               .pipe(
                    map(this.extractData),
                    catchError(this.handleError)
               );
    }

    //PUT
    public put(url: string, data: any, id: any): Observable<any> {
        url =  url + '/' + id;
             return this.http.put(url, data, this.options)
               .pipe(
                    map(this.extractData),
                    catchError(this.handleError)
               );
    }
}

