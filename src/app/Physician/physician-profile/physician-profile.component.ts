import { Component } from '@angular/core'
import { AuthService } from '../../auth/auth.service';
@Component({
    templateUrl: './physician-profile.component.html',
    selector: 'app-PhysicianProfile',
    styleUrls: ['./physician-profile.component.css']
})
export class PhysicianProfileComponent {
    constructor(private authService: AuthService) {
    }
}