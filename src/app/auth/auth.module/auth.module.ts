import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule} from 'ng2-translate';
import { AuthRouterModule } from '../auth-route/auth-router.module';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';

@NgModule({

  imports: [
    CommonModule,
    AuthRouterModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule
  ],
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  providers: [
  ]
})
export class AuthModule { }
