import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CourseListComponent } from './course-list.component';
import { CourseDetailComponent } from './course-detail.component';

import { CourseService } from './course.service';
import { StudentService } from '../students/student.service';

import { CourseRoutingModule } from './course-routing.module';

import { ForbiddenValidatorDirective } from '../forbidden-name.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CourseRoutingModule
  ],
  declarations: [
    CourseListComponent,
    CourseDetailComponent,
    ForbiddenValidatorDirective
  ],
  providers: [
    CourseService,
    StudentService
  ],
  exports: [
    ForbiddenValidatorDirective
  ]
})
export class CoursesModule {}
