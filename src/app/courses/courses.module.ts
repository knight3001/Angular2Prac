import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CourseListComponent } from './course-list.component';
import { CourseDetailComponent } from './course-detail.component';

import { CourseService } from './course.service';

import { CourseRoutingModule } from './course-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CourseRoutingModule
  ],
  declarations: [
    CourseListComponent,
    CourseDetailComponent
  ],
  providers: [
    CourseService
  ]
})
export class CoursesModule {}
