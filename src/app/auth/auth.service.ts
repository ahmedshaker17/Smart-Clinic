import { Response, Http } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/Rx';
import { Observable } from "rxjs/Observable";
import { CustomResponse } from '../shared/CustomResponse.model';
import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import { Body } from '@angular/http/src/body';
@Injectable()
export class AuthService {
    constructor(private httpRequest: HttpClient) {
    }

    Login(email: string, password: string): Promise<CustomResponse> {
        let loginUrl = `${environment.serviceUrl}/Auth/Login/${email}/${password}`;
        return new Promise((resolve, reject) => {
            this.httpRequest.get(loginUrl).subscribe((resp: CustomResponse) => {
                resolve(resp);
            }, (error: Error) => {
                reject(error);
            });
        });
    }
    register(params: any): Promise<CustomResponse> {
        return new Promise((resolve, reject) => {
            let registerURL = `${environment.serviceUrl}/Auth/Register`;
            let headers = new HttpHeaders();
            headers.append('Content-Type', 'application/json');
            this.httpRequest.post(registerURL, JSON.stringify(params), { headers: headers })
        });
    }
    public getToken(): string {
        return localStorage.getItem('AuthToken');
    }
    public setToken(token) {
        localStorage.setItem('AuthToken', token);
    }
    public logout() {
        localStorage.removeItem('AuthToken');
    }
    public isAuthenticated(): boolean {
        // return this.getToken() !== null;
        return false;
    }
}