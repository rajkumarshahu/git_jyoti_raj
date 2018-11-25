import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpServices } from '../service/http-service';
import { IVideo } from './video';

@Injectable()
export class Videoservices {

    constructor(private service: HttpServices) { }

    getVideo(): Observable<IVideo[]> {
      return this.service.get('api/videos');
    }

    postVideo(data: IVideo): Observable<any> {
        return this.service.post('api/videos', data);
    }
    // intializeProperty(): IVideo {
    //     return {
    //         firstName:  '',
    //         lastName: '',
    //         address: '',
    //         city: '',
    //         phoneNumber: '',
    //         status: ''
    //     };
    // }
}
