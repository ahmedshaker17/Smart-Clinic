import { Injectable } from "@angular/core";
import { CustomResponse } from "./CustomResponse.model";
import { environment } from "../../environments/environment"
import {  HttpClient, HttpHeaders , HttpErrorResponse} from "@angular/common/http";
import { CommonService } from "./common.service";
@Injectable()
export class FileUploaderService {
    constructor(private http: HttpClient , private commonSrvc : CommonService) {

    }
    uploadFile(fileList: FileList) : Promise<CustomResponse> {
        let file: File = fileList[0];
        let formData: FormData = new FormData();
        formData.append('uploadFile', file, file.name);
        let headers = new HttpHeaders();
    
        let apiUrl1 = `${environment.serviceUrl}/FileUploader/upload`;
        return new Promise((resolve, reject) => {
            this.http.post(apiUrl1, formData, { headers: headers }).subscribe((resp: CustomResponse) => {
                resolve(resp);
            }, (error: HttpErrorResponse) => {
                reject(error);
            });
        });
}

   
}