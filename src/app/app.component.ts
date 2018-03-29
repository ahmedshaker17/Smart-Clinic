import { Component, OnInit, OnDestroy } from '@angular/core';
import { TranslateService } from 'ng2-translate';
import { CommonService } from './shared/common.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  param = { value: '' };
  layoutDirection: string = "rtl";
  appLng: string = "ar";
  subscription: Subscription;
  constructor(private translate: TranslateService, private commonService: CommonService) {
    translate.setDefaultLang('ar');
    this.appLng = this.commonService.getAppLng();
    translate.use(this.appLng);
  }
  ngOnInit() {
    this.layoutDirection = this.appLng === "ar" ? "rtl" : "ltr";
    this.subscription = this.commonService.lngChanged.subscribe(
      (lng: string) => {
        this.changeLang(lng);
      });
  }
  changeLang(lng) {
    this.translate.use(lng);
    this.commonService.setAppLng(lng);
    this.appLng = lng;
    this.layoutDirection = this.appLng === "ar" ? "rtl" : "ltr";
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
