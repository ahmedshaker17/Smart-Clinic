import { Injectable } from "@angular/core";
import { CustomResponse, PhysicianResponse } from "./CustomResponse.model";
import { environment } from "../../environments/environment"
import { Http, Headers, Response } from "@angular/http";
import { CommonService } from "./common.service";
@Injectable()
export class FileUploaderService {
    constructor(private http: Http, private commonSrvc: CommonService) {

    }
    uploadFile(fileList: FileList): Promise<PhysicianResponse> {
        let file: File = fileList[0];
        let formData: FormData = new FormData();
        formData.append('uploadFile', file, file.name);
        let headers = new Headers();

        let apiUrl1 = `${environment.serviceUrl}/FileUploader/upload`;
        return new Promise((resolve, reject) => {
            this.http.post(apiUrl1, formData, { headers: headers }).map((resp: Response) => {
                let srvcResp = resp.json();
                return srvcResp;
            }).subscribe((resp: PhysicianResponse) => {
                resolve(resp);
            }, (error: Error) => {
                reject(error);
            });
        });
    }


}