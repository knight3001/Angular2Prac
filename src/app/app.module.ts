import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { CoursesModule } from './courses/courses.module';
import { TeachersModule } from './teachers/teachers.module';

import { DialogService } from './dialog.service';
import { AuthGuard } from './users/auth-guard.service';
import { UserService } from './users/users.service';

import { LoginRoutingModule } from './users/login-routing.module';
import { LoginComponent } from './users/login.component';

import { CustomFormsModule } from 'ng2-validation';
import { DateValueAccessorModule } from 'angular-date-value-accessor';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { CourseData } from './courses/course-data';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    CoursesModule,
    LoginRoutingModule,
    CustomFormsModule,
    DateValueAccessorModule,
    TeachersModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(CourseData)
  ],
  declarations: [
    AppComponent,
    LoginComponent
  ],
  providers: [
    DialogService,
    AuthGuard,
    UserService,
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/