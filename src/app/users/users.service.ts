import { Injectable } from '@angular/core';

export class User {
  constructor(public id: number, public username: string, public password: string) { }
}

let USERS = [
  new User(1, 'Terry', 'terry'),
  new User(2, 'Narco', 'narco'),
  new User(3, 'Bombasto', 'bombasto'),
  new User(4, 'Celeritas', 'cel'),
  new User(5, 'Magneta', 'mag'),
  new User(6, 'Admin', 'admin')
];

let usersPromise = Promise.resolve(USERS);

@Injectable()
export class UserService {

  getUser(username: string, password: string) {
    return usersPromise
      .then(users => users.find(user => user.username === username && user.password === password));
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}



/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/