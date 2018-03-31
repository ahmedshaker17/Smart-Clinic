import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { CommonService } from '../shared/common.service';
import { Subscription } from 'rxjs/Subscription';
import { Router } from '@angular/Router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  headerLng: string = "";
  constructor(private authService: AuthService, private commonService: CommonService , private router : Router) { 
  }

  ngOnInit() {
    this.headerLng = this.commonService.getAppLng() =="ar" ? "English" : "العربية";
  }
  onLogut() {
    this.authService.logout();
    this.router.navigate(['./']);
  }
  changeLng() {
    let lng = this.commonService.getAppLng() =="ar" ? "en" : "ar";
    this.commonService.lngChanged.next(lng);
    this.headerLng = this.commonService.getAppLng() =="ar" ? "English" : "العربية";
  }
  ngOnDestroy() {
  }

}
