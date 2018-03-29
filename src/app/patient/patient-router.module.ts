import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, Routes, RouterModule } from '@angular/Router';
import { PatientListComponent } from './patient-list/patient-list.component';
import { AuthGuard } from '../auth/auth-guard.service';
import { PatientsComponent } from './patients.component';
import { NewPatientComponent } from './new-patient/new-patient.component';
const profileRouter: Routes = [
  {
    path: 'Patients', component: PatientsComponent, canActivate: [AuthGuard],
    children: [
      { path: 'add', component: NewPatientComponent }
    ]
  }];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(profileRouter)
  ],
  exports: [RouterModule],
  declarations: []
})
export class PatientRouterModule { }
