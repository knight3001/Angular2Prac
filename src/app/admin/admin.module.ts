import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AdminDashboardComponent } from './admin-dashboard.component';
import { ManageStudentsComponent } from './manage-students.component';
import { ManageCoursesComponent } from './manage-courses.component';
import { AdminRoutingModule } from './admin-routing.module';
@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  declarations: [
    AdminComponent,
    AdminDashboardComponent,
    ManageStudentsComponent,
    ManageCoursesComponent
  ]
})
export class AdminModule { }
