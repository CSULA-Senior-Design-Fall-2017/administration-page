import {Injectable} from '@angular/core';
import {User} from './user.model';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/distinct';

@Injectable()
export class UserService {
  counter = 15;
  users: User[] = [{
    id: 11,
    firstName: 'Hongsuk',
    lastName: 'Choi',
    email: 'choi@gmail.com',
    password: '1234',
  }, {
    id: 12,
    firstName: 'Davis',
    lastName: 'Louie',
    email: 'davislouie90@gmail.com',
    password: '4321'
  }, {
    id: 13,
    firstName: 'Zoe',
    lastName: 'Ramirez',
    email: 'zoe@gmail.com',
    password: '1234'
  }, {
    id: 14,
    firstName: 'Sudip',
    lastName: 'Baral',
    email: 'sudip@gmail.com',
    password: '1234'
  }];

  getAllUsers(): Observable<User[]> {
    console.log(this.users);
    return Observable.of(this.users);
  }

  getUserById(id: number): Observable<User> {
    return Observable.of(this.users.find(user => user.id === id));
  }

  addUser(userIn: User): void {
    const newUser = userIn;
    newUser.id = this.counter;
    // console.log(this.counter);
    if ((this.users.findIndex(user => user.email === newUser.email)) === -1) {
      this.users.push(newUser);
      this.counter++;
    }
    console.log(this.users);
  }

  editUserById(editUser: User): void {
    this.users.push(editUser);
  }

  deleteUserById(id: number): void {
    console.log(id);
    this.users = this.users.filter(user => user.id !== id);
  }
}

