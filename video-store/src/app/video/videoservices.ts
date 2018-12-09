import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpServices } from '../service/http-service';
import { IVideo } from './video';

@Injectable()
export class Videoservices {

    private url = "http://localhost:3000/api/video";

    constructor(private service: HttpServices,
        ) { }

    getVideo(): Observable<IVideo[]> {
      return this.service.get(this.url);
    }

    postVideo(data: any): Observable<any> {
        return this.service.post(this.url, data);
    }

    putVideo(data: any, id: any): Observable<any> {
        return this.service.put(this.url + "/" + id, data);   
    }
    
    deleteVideo(id: any): Observable<any> {
        return this.service.delete(this.url + "/" + id);
    }
}
