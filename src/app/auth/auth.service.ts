import { Response, Http, Headers } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/Router';
import 'rxjs/Rx';
import { Observable } from "rxjs/Observable";
import { CustomResponse, PhysicianResponse } from '../shared/CustomResponse.model';
import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
    constructor(private httpRequest: Http , private router: Router) {
    }

    Login(email: string, password: string): Promise<PhysicianResponse> {
        let loginUrl = `${environment.serviceUrl}/Auth/Login/${email}/${password}`;
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return new Promise((resolve, reject) => {
            this.httpRequest.get(loginUrl, { headers: headers }).map((resp: Response) => {
                const srvcResp: PhysicianResponse = resp.json();
                return srvcResp;
            }).subscribe((resp: PhysicianResponse) => {
                resolve(resp);
            }, (error: Error) => {
                reject(error);
            });
        });
    }
    register(params: any): Promise<PhysicianResponse> {
        return new Promise((resolve, reject) => {
            let registerURL = `${environment.serviceUrl}/Auth/Register`;
            let headers = new Headers();
            headers.append('Content-Type', 'application/json');
            this.httpRequest.post(registerURL, JSON.stringify(params), { headers: headers }).map((resp: Response) => {
                const srvcResp: PhysicianResponse = resp.json();
                return srvcResp;
            }).subscribe((resp: PhysicianResponse) => {
                resolve(resp);
            }, (error: Error) => {
                reject(error);
            });
        });
    }
    getToken(): string {
        return localStorage.getItem('AuthToken');
        //"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6InRlc3QiLCJuYmYiOjE1MjI0NTU3NjYsImV4cCI6MTUyMzA2MDU2NiwiaWF0IjoxNTIyNDU1NzY2LCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjQyMDAiLCJhdWQiOiJodHRwOi8vbG9jYWxob3N0OjUzMTQifQ.ujeqSv-LeRtsewTaAOkKJnA024XdX0Txr1OX2QNjtto";
    }
    setToken(token) {
        localStorage.setItem('AuthToken', token);
    }
    getUser(): any {
        if (localStorage.getItem('user')) {

            return JSON.parse(localStorage.getItem('user'));
        }
        return null;
    }
    setUser(user: any) {
        localStorage.setItem('user', JSON.stringify(user));
    }
    logout() {
        localStorage.removeItem('AuthToken');
    }
    isAuthenticated(): boolean {
        return this.getToken() !== null;
    }
    isActivated(): boolean {
        let user = this.getUser();
        if (user && user.isActivated) {
            return true;
        }
        return false;
    }
    handleProfileAccess(resp : PhysicianResponse){
        if(resp.RequestSucceeded)
        {
          this.setToken(resp.Token);
          this.setUser({ID : resp.PhysicianID , isActivated : resp.IsActivated});
          this.router.navigate(['./Dashboard']);
        }
        else
        {
          alert(resp.UserMessage);
        }
    }
}