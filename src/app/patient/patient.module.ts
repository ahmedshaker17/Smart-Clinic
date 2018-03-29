import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientRouterModule } from './patient-router.module';
import { PatientListComponent } from './patient-list/patient-list.component';
import { PatientsComponent } from './patients.component';
import { NewPatientComponent } from './new-patient/new-patient.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    PatientRouterModule,
    FormsModule
  ],
  declarations: [PatientListComponent, PatientsComponent, NewPatientComponent]
})
export class PatientsModule { }
