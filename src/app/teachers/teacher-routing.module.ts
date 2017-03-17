import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TeachersComponent } from './teacher-list.component';

const teachersRoutes: Routes = [
  { path: '',  component: TeachersComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(teachersRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class TeacherRoutingModule { }
