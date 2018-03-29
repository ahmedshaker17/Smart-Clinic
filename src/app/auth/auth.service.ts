import { Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import 'rxjs/Rx';
import { Observable } from "rxjs/Observable";
import { CustomResponse } from '../shared/CustomResponse.model';
import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
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
       return true;
    }
}