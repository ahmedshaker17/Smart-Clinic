import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/Router';

@Component({
    selector: 'app-patient-list',
    templateUrl: './patient-list.component.html',
    styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent {
    constructor(private router: Router, private route: ActivatedRoute) {

    }
    onNewPatient() {
        this.router.navigate(['add'], { relativeTo: this.route })
    }
}