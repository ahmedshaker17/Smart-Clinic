import { Response, Http, Headers } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/Rx';
import { Observable } from "rxjs/Observable";
import { CustomResponse } from '../shared/CustomResponse.model';
import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import { Body } from '@angular/http/src/body';
@Injectable()
export class AuthService {
    constructor(private httpRequest: Http) {
    }

    Login(email: string, password: string): Promise<CustomResponse> {
        let loginUrl = `${environment.serviceUrl}/Auth/Login/${email}/${password}`;
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return new Promise((resolve, reject) => {
            this.httpRequest.get(loginUrl, { headers: headers }).map((resp: Response) => {
                const srvcResp: CustomResponse = resp.json();
                return srvcResp;
            }).subscribe((resp: CustomResponse) => {
                resolve(resp);
            }, (error: Error) => {
                reject(error);
            });
        });
    }
    register(params: any): Promise<CustomResponse> {
        return new Promise((resolve, reject) => {
            let registerURL = `${environment.serviceUrl}/Auth/Register`;
            let headers = new Headers();
            headers.append('Content-Type', 'application/json');
            this.httpRequest.post(registerURL, JSON.stringify(params), { headers: headers }).map((resp: Response) => {
                const srvcResp: CustomResponse = resp.json();
                return srvcResp;
            }).subscribe((resp: CustomResponse) => {
                if (resp.RequestSucceeded) {
                    this.setToken(resp.Token);
                }
                resolve(resp);
            }, (error: Error) => {
                reject(error);
            });
        });
    }
    public static getToken(): string {
        return localStorage.getItem('AuthToken');
        //"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6InRlc3QiLCJuYmYiOjE1MjI0NTU3NjYsImV4cCI6MTUyMzA2MDU2NiwiaWF0IjoxNTIyNDU1NzY2LCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjQyMDAiLCJhdWQiOiJodHRwOi8vbG9jYWxob3N0OjUzMTQifQ.ujeqSv-LeRtsewTaAOkKJnA024XdX0Txr1OX2QNjtto";
    }
    public setToken(token) {
        localStorage.setItem('AuthToken', token);
    }
    public logout() {
        localStorage.removeItem('AuthToken');
    }
    public isAuthenticated(): boolean {
        return AuthService.getToken() !== null;
    }
}