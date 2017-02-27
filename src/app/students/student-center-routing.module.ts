import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StudentCenterHomeComponent } from './student-center-home.component';
import { StudentListComponent } from './student-list.component';
import { StudentCenterComponent } from './student-center.component';
import { StudentDetailComponent } from './student-detail.component';

import { CanDeactivateGuard } from '../can-deactivate-guard.service';
import { StudentDetailResolve } from './student-detail-resolve.service';

const studentsCenterRoutes: Routes = [
  {
    path: '',
    component: StudentCenterComponent,
    children: [
      {
        path: '',
        component: StudentListComponent,
        children: [
          {
            path: ':id',
            component: StudentDetailComponent,
            canDeactivate: [CanDeactivateGuard],
            resolve: {
              student: StudentDetailResolve
            }
          },
          {
            path: '',
            component: StudentCenterHomeComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(studentsCenterRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    StudentDetailResolve
  ]
})
export class StudentCenterRoutingModule { }
