import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/Router";
import { Injectable } from "@angular/core";

import { AuthService } from "./auth.service";
@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private authService: AuthService) {

    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        return this.authService.isAuthenticated();
    }
}