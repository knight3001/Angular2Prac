import { Injectable }    from '@angular/core';

export class User {
  constructor(public id: number, public username: string, public password : string ) { }
}

let USERS = [
  new User(1, 'Terry', 'terry'),
  new User(2, 'Narco', 'narco'),
  new User(3, 'Bombasto', 'bombasto'),
  new User(4, 'Celeritas', 'cel'),
  new User(5, 'Magneta', 'mag'),
  new User(6, 'RubberMan', 'rub')
];

let usersPromise = Promise.resolve(USERS);

@Injectable()
export class UserService {

  getUser(id: number | string) {
    return usersPromise
      .then(users => users.find(user => user.id === +id));
  }
}



/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/