import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
@Injectable()
export class CommonService {
    lngChanged = new Subject<string>();
    appLang : string ="";
    constructor() {

    }

    setAppLng(lng : string){
        localStorage.setItem('appLanguage', lng);
    }
    getAppLng(){
      return  localStorage.getItem('appLanguage')!=null ? localStorage.getItem('appLanguage') : "ar";
    }
}