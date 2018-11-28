import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpServices } from '../service/http-service';
import { IVideo } from './video';

@Injectable()
export class Videoservices {

    private url = "api/videos";

    constructor(private service: HttpServices) { }


    getVideo(): Observable<IVideo[]> {
      return this.service.get(this.url);
    }

    postVideo(data: IVideo): Observable<any> {
        return this.service.post(this.url, data);
        
    }

    putVideo(data: IVideo): Observable<any> {
        return this.service.put(this.url, data, data.id);
        
    }
    
    deleteVideo(id: any): Observable<any> {
        return this.service.delete(this.url, id);
    }
}
