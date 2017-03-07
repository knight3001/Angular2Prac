import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { AuthService } from './auth.service';
import { User, UserService } from './users.service';

@Component({
  template: `
    <div class="form-horizontal">
      <h3 class="centerText">
        <span class="label label-danger" *ngIf="!authService.isLoggedIn">{{message}}</span>
        <span class="label label-success" *ngIf="authService.isLoggedIn">{{message}}</span>
      </h3>
     
      <div class="form-group" *ngIf="!authService.isLoggedIn">
        <label class="col-sm-2 control-label">Username:</label>
        <div class="col-sm-10">
            <input [(ngModel)]="user.username" placeholder="Admin" name="username" class="form-control"
            #username="ngModel" required maxlength="24" />
            <div *ngIf="username.errors && (username.dirty || username.touched)"
                class="alert alert-danger">
                <div [hidden]="!username.errors.required">
                  Username is required
                </div>
                <div [hidden]="!username.errors.maxlength">
                  Username cannot be more than 24 characters long.
                </div>
            </div>
        </div>
      </div>

      <div class="form-group" *ngIf="!authService.isLoggedIn">
        <label class="col-sm-2 control-label">Password:</label>
        <div class="col-sm-10">
            <input [(ngModel)]="user.password" placeholder="admin" name="password" class="form-control"
            #password="ngModel" required />
            <div *ngIf="password.errors && (password.dirty || password.touched)"
                class="alert alert-danger">
                <div [hidden]="!password.errors.required">
                  Password is required
                </div>
            </div>
        </div>
      </div>

      <div class="form-group">
        <div class="col-sm-10 col-sm-offset-2">
          <button type="button" class="btn btn-success" (click)="login()"  *ngIf="!authService.isLoggedIn">Login</button>
          <button type="button" class="btn btn-danger" (click)="logout()" *ngIf="authService.isLoggedIn">Logout</button>
        </div>
      </div>

    </div>
  `
})
export class LoginComponent implements OnInit {
  message: string;
  user: any = {};

  constructor(
    public authService: AuthService,
    public router: Router
  ) { }

  ngOnInit(): void {
     this.setMessage();
  }

  setMessage() {
    this.message = 'Logged ' + (this.authService.isLoggedIn ? 'in' : 'out');
  }
  login() {
    if (this.user.username.trim() !== '' && this.user.password.trim() !== '') {
      this.message = 'Trying to log in ...';
      this.authService.login(this.user.username, this.user.password).then((user) => {
        this.setMessage();
        if (this.authService.isLoggedIn) {
          // Get the redirect URL from our auth service
          // If no redirect has been set, use the default
          let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/admin';

          // Set our navigation extras object
          // that passes on our global query params and fragment
          localStorage.setItem('username', JSON.stringify(user.username));
          localStorage.setItem('userid', JSON.stringify(user.id));
          let navigationExtras: NavigationExtras = {
            preserveQueryParams: true,
            preserveFragment: true
          };

          // Redirect the user
          this.router.navigate([redirect], navigationExtras);
        }
        else{
           this.message = 'Username / Password mismatch!';
        }
      });
    }
  }
  logout() {
    this.authService.logout();
    this.setMessage();
  }
}
