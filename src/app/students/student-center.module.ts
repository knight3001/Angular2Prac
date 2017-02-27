import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { StudentService } from './student.service';

import { StudentCenterComponent } from './student-center.component';
import { StudentListComponent } from './student-list.component';
import { StudentCenterHomeComponent } from './student-center-home.component';
import { StudentDetailComponent } from './student-detail.component';

import { StudentCenterRoutingModule } from './student-center-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    StudentCenterRoutingModule
  ],
  declarations: [
    StudentCenterComponent,
    StudentListComponent,
    StudentCenterHomeComponent,
    StudentDetailComponent
  ],
  providers: [
    StudentService
  ]
})
export class StudentCenterModule { }