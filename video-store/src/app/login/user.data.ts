import { InMemoryDbService } from 'angular-in-memory-web-api';
import { IUser } from './user';

export class UserData implements InMemoryDbService {
    createDb() {
        const users: IUser[] =  [
            { id: 1, userName: 'admin', password: 'admin', isAdmin: true},
            { id: 2, userName: 'raj', password: 'raj', isAdmin: false}
        ];
        return { users };
    }
}
