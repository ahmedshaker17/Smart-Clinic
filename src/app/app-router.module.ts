import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes , RouterModule } from '@angular/Router';
import { HomeComponent } from './home/home.component';
const appRoutes : Routes = [{path : '' , component : HomeComponent}];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports : [RouterModule],
  declarations: []
})
export class AppRouterModule { }
