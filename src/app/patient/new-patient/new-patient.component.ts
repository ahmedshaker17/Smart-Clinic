import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/Router';
@Component({
    selector: 'app-new-patient',
    templateUrl: './new-patient.component.html',
    styleUrls: ['./new-patient.component.css']
})
export class NewPatientComponent {
    @ViewChild('newPatientForm') newPatientForm: NgForm;
    constructor(private router: Router, private activateRoute: ActivatedRoute) {

    }
    onSubmit() {
    }
    onCancel() {
        this.router.navigate(['../'], { relativeTo: this.activateRoute });
    }

}