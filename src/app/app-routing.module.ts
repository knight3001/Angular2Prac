import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

import { CanDeactivateGuard } from './can-deactivate-guard.service';
import { AuthGuard } from './users/auth-guard.service';
import { PreloadSelectedModules } from './selective-preload-strategy';

const appRoutes: Routes = [
   {
    path: 'admin',
    loadChildren: 'app/admin/admin.module#AdminModule',
    canLoad: [AuthGuard]
  },
  {
    path: '',
    redirectTo: '/courses',
    pathMatch: 'full'
  },
  {
    path: 'students',
    loadChildren: 'app/students/student-center.module#StudentCenterModule',
    data: {
      preload: true
    }
  },
  {
    path: 'teachers',
    loadChildren: 'app/teachers/teachers.module#TeachersModule'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes,  { preloadingStrategy: PreloadSelectedModules })
  ],
  exports: [
    RouterModule
  ],
  providers: [
    CanDeactivateGuard,
    PreloadSelectedModules
  ]
})
export class AppRoutingModule {}
