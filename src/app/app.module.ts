import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
//import {HttpModule} from '@angular/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate';
import { TokenInterceptor } from './auth/token.interceptor';
import { AppRouterModule } from './app-router.module';
import { AuthModule } from './auth/auth.module/auth.module';
import { AuthService } from './auth/auth.service'
import { AuthGuard } from './auth/auth-guard.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { PhysiciansModule } from './Physician/physicians.module';
import { PatientsModule } from './patient/patient.module';
import { SharedModule } from './shared/shared.module';
import { Http, HttpModule } from '@angular/http';
import { CommonService } from './shared/common.service';
import { FileUploaderService } from './shared/fileUploader.service';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,

  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    AuthModule,
    PatientsModule,
    PhysiciansModule,
    SharedModule,
    TranslateModule.forRoot({
      provide: TranslateLoader,
      useFactory: (http: Http) => new TranslateStaticLoader(http, '/assets/i18n', '.json'),
      deps: [Http]
    })
  ],
  providers: [AuthService, AuthGuard, CommonService,FileUploaderService/*{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  }*/],
  bootstrap: [AppComponent]
})
export class AppModule { }