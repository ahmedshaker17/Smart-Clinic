import {NgModule } from '@angular/core'
import {CommonModule} from '@angular/common';
import { PhysiciansRouterModule } from './physicians-router.module';
import { PhysicianProfileComponent } from './physician-profile/physician-profile.component';

@NgModule({
imports :[CommonModule,PhysiciansRouterModule],
declarations :[PhysicianProfileComponent]
})
export class PhysiciansModule{

}