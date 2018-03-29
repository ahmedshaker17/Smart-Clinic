import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes , RouterModule} from '@angular/Router';
import {LoginComponent} from '../login/login.component';
import {RegisterComponent} from '../register/register.component';
const authRoutes : Routes = [
  {path : 'Login' , component : LoginComponent},
  {path : 'Register' , component : RegisterComponent}
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(authRoutes),
  ],
  exports : [RouterModule],
  declarations: []
})
export class AuthRouterModule { }
