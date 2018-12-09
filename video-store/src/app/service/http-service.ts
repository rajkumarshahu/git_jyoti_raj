import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable, of, throwError} from 'rxjs';
import { map, catchError} from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable()
export class HttpServices {

    private baseUrl: 'api';
    private headers = new Headers({ 'Content-Type': 'application/json' });
    private options = new RequestOptions({ headers: this.headers });

    constructor(private http: Http) { }

    private handleError(error: Response): Observable<any> {
      return  throwError(error || 'Server Error');
    }

    private extractData(response: Response) {
        const resp = response.json();
        return resp || resp.result || {};
    }

    // GET
    public get(url: string): Observable<any> {
        return this.http.get(url)
        .pipe(
            map(this.extractData),
           catchError(this.handleError)
        );
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
      
        return this.http.post(url, data, this.options)
               .pipe(
                    map(this.extractData),
                    catchError(err => of(err))
               );
    }

    //PUT
    public put(url: string, data: any): Observable<any> {

             return this.http.put(url, data, this.options)
               .pipe(
                    map(this.extractData),
                    catchError(this.handleError)
               );
    }
}

