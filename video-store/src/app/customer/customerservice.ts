import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpServices } from '../service/http-service';
import { ICustomer } from './customer';

@Injectable()
export class Customerservice {

    constructor(private service: HttpServices) { }

    getCustomer(): Observable<ICustomer[]> {
      return this.service.get('http://localhost:3000/api/customer');
    }

    intializeProperty(): ICustomer {
        return {
            firstName:  '',
            lastName: '',
            address: '',
            city: '',
            phoneNumber: '',
            status: ''
        };
    }
}
