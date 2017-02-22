import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CourseListComponent } from './course-list.component';
import { CourseDetailComponent } from './course-detail.component';

const heroesRoutes: Routes = [
  { path: 'courses',  component: CourseListComponent },
  { path: 'course/:id', component: CourseDetailComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(heroesRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class CourseRoutingModule { }
