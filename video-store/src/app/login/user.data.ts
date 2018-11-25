import { InMemoryDbService } from 'angular-in-memory-web-api';
import { IUser } from './user';
import { ICustomer } from '../customer/customer';
import { IVideo } from '../video/video';

export class UserData implements InMemoryDbService {
    createDb() {
        let users: IUser[] =  [
            { id: 1, userName: 'admin', password: 'admin', isAdmin: true},
            { id: 2, userName: 'raj', password: 'raj', isAdmin: false}
        ];

        let customers: ICustomer[] = [
            {firstName: 'Jim', lastName: 'Smith', address: '240 Test Avenue',
            city: 'Toronto', phoneNumber: '(647) 561-0000', status: 'Active'},
            {firstName: 'John', lastName: 'Doe', address: '921 Wellesley Avenue',
            city: 'Toronto', phoneNumber: '(647)-222-3259', status: 'Expired'},
            {firstName: 'Boris', lastName: 'Livingston', address: '386-2954 Mollis Ave',
            city: 'Toronto', phoneNumber: '(834) 983-5612', status: 'Active'},
            {firstName: 'Marshall', lastName: 'Fitzgerald', address: '892-8302 Accumsan St.',
            city: 'Toronto', phoneNumber: '(959) 477-1742', status: 'Expired'},
            {firstName: 'Allen', lastName: 'Driscoll', address: 'Ap #656-2182 Ligula Rd.',
            city: 'Dorval', phoneNumber: '(727) 575-0961', status: 'Expired'},
            {firstName: 'David', lastName: 'York', address: '298-2612 Risus. Road',
            city: 'Dorval', phoneNumber: '(955) 685-3157', status: 'Active'},
        ];

        let videos: IVideo[] = [
            {title: 'Star Wars', runningTime: '120 Minutes', genre: 'Science Fiction',
            rating: '5 Stars', director: 'Richard Marquand', status: 'Available'}
        ];

        return { users, customers, videos };
    }
}
