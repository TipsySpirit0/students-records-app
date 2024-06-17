import { Routes } from '@angular/router';
import { LandingComponent } from './dashboard/landing/landing.component';
import { StudentRecordsComponent } from './dashboard/student-records/student-records.component';
import { LoginComponent } from './auth/login/login.component';

import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { authGuardGuard } from './auth/auth-guard.guard';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
      // canMatch: authGuardGuard,
  },
  //   {
  //     path: 'landing',
  //     component: LandingComponent,
  //     canMatch: [authGuardGuard],
  //   },
  //   {
  //     path: 'students',
  //     component: StudentRecordsComponent,
  //     canMatch: [authGuardGuard],
  //   },
];
