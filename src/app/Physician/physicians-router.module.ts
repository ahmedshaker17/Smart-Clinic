import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/Router';
import { PhysicianProfileComponent } from './physician-profile/physician-profile.component';
import { AuthGuard } from '../auth/auth-guard.service';
const appRoutes: Routes = [{ path: 'Dashboard', component: PhysicianProfileComponent, canActivate: [AuthGuard] }];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(appRoutes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class PhysiciansRouterModule { }