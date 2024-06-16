import { Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { StudentRecordsComponent } from './student-records/student-records.component';
import { LoginComponent } from './auth/login/login.component';
import { authGuardGuard } from './auth-guard.guard';

export const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'landing',
    component: LandingComponent,
    canMatch: [authGuardGuard],
  },
  {
    path: 'students',
    component: StudentRecordsComponent,
    canMatch: [authGuardGuard],
  },
];
