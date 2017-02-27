import { Component } from '@angular/core';
@Component({
  template:  `
    <nav class="navbar navbar-default">
      <ul class="nav navbar-nav">
        <li><a routerLink="./"
            [routerLinkActiveOptions]="{ exact: true }" routerLinkActive="active">Dashboard</a></li>
        <li><a routerLink="./students" routerLinkActive="active">Manage Students</a></li>
        <li><a routerLink="./courses" routerLinkActive="active">Manage Courses</a></li>
      </ul>
      
    </nav>
    <router-outlet></router-outlet>
  `
})
export class AdminComponent {
}
