import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="panel panel-default">
      <div class="panel-heading page-header centerText">
        <h1>Angular Prac</h1>
        <small>Terry Xu</small>
      </div>
      <div class='panel-body'>
        <div class='col-md-4 col-md-offset-4'>
          <ul class="nav nav-pills">
            <li role="presentation" routerLinkActive="active"><a routerLink="/students">Student Center</a></li>
            <li role="presentation" routerLinkActive="active"><a routerLink="/courses">Courses</a></li>
            <li role="presentation" routerLinkActive="active"><a routerLink="/admin">Admin</a></li>
            <li role="presentation" routerLinkActive="active"><a routerLink="/login">Login</a></li>
          </ul>
          <router-outlet></router-outlet>
        </div>
      </div>
    </div>
  `
})

export class AppComponent {
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/