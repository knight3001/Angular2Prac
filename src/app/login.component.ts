import { Component }   from '@angular/core';
import { Router, NavigationExtras }      from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  template: `
    <div class="col-sm-10 col-sm-offset-1">
      <h2>
        <span class="label label-danger" *ngIf="!authService.isLoggedIn">{{message}}</span>
        <span class="label label-success" *ngIf="authService.isLoggedIn">{{message}}</span>
      </h2>
        <button type="button" class="btn btn-success" (click)="login()"  *ngIf="!authService.isLoggedIn">Login</button>
        <button type="button" class="btn btn-danger" (click)="logout()" *ngIf="authService.isLoggedIn">Logout</button>
    </div>`
})
export class LoginComponent {
  message: string;
  constructor(public authService: AuthService, public router: Router) {
    this.setMessage();
  }
  setMessage() {
    this.message = 'Logged ' + (this.authService.isLoggedIn ? 'in' : 'out');
  }
  login() {
    this.message = 'Trying to log in ...';
    this.authService.login().subscribe(() => {
      this.setMessage();
      if (this.authService.isLoggedIn) {
        // Get the redirect URL from our auth service
        // If no redirect has been set, use the default
        let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/admin';

        // Set our navigation extras object
        // that passes on our global query params and fragment
        let navigationExtras: NavigationExtras = {
          preserveQueryParams: true,
          preserveFragment: true
        };

        // Redirect the user
        this.router.navigate([redirect], navigationExtras);
      }
    });
  }
  logout() {
    this.authService.logout();
    this.setMessage();
  }
}
