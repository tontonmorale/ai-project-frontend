import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { JwtService } from './jwt.service';
import { NgxPermissionsService } from 'ngx-permissions';

@Injectable()
export class NoAuthGuardService implements CanActivate {    // path without guards

    constructor(private  router: Router, private jwtService : JwtService, private permissionsService: NgxPermissionsService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        
        let token = window.localStorage.getItem('ai-token');   
        let isExpired = this.jwtService.ifTokenExpired(token);
        let canAccess: boolean;

        if (isExpired) {
            // stay where you are
            canAccess = true;
            this.permissionsService.flushPermissions();
        }
        else{
            // redirect to user homepage
            canAccess = false;
            this.router.navigateByUrl('/home');
            
        }

        return of(canAccess);
    }
}

