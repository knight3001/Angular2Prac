import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

import { User, UserService } from './users.service';

@Injectable()
export class AuthService {
  isLoggedIn: boolean = false;
  // store the URL so we can redirect after logging in
  redirectUrl: string;

  constructor(
     public userService: UserService,
  ) { }

  login(username: string, password: string): Promise<User> {
    return this.userService.getUser(username, password).then(user => {
      if (user) {
        // return Observable.of(true).delay(1000).do(val => this.isLoggedIn = true);
        this.isLoggedIn = true;
        return user;
      } else { // id not found
        return false;
      }
    });
  }

  logout(): void {
    this.isLoggedIn = false;
  }
}
