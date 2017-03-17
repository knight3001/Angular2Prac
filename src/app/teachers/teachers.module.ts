import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { teacherServices, teacherComponents } from './teacher-list.component';

import { TeacherRoutingModule } from './teacher-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TeacherRoutingModule
  ],
  declarations: [
    teacherComponents
  ],
  providers: [
    teacherServices
  ]
})
export class TeachersModule {}
