import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { AppComponent }         from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HeroesModule }         from './heroes/heroes.module';

import { DialogService }        from './dialog.service';
import { AuthGuard }            from './auth-guard.service';

import { LoginRoutingModule }   from './login-routing.module';
import { LoginComponent }       from './login.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HeroesModule,
    LoginRoutingModule
  ],
  declarations: [
    AppComponent,
    LoginComponent
  ],
  providers: [
    DialogService,
    AuthGuard,
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/