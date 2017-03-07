import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from './admin.component';
import { ManageStudentsComponent } from './manage-students.component';
import { ManageCoursesComponent } from './manage-courses.component';
import { AdminDashboardComponent } from './admin-dashboard.component';

import { AuthGuard } from '../users/auth-guard.service';

const adminRoutes: Routes = [
  {
    path: '',
    component: AdminComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        canActivateChild: [AuthGuard],
        children: [
          { path: 'students', component: ManageStudentsComponent },
          { path: 'courses', component: ManageCoursesComponent },
          { path: '', component: AdminDashboardComponent }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(adminRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule { }
