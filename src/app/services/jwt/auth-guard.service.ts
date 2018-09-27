import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { JwtService } from './jwt.service';
import { Observable, of } from 'rxjs';
//import { UserService } from '../user.service';
import { NgxPermissionsService } from 'ngx-permissions';

@Injectable({ providedIn: 'root' })
export class AuthGuardService implements CanActivate {

    constructor(private router: Router, private jwtService : JwtService,
        //private userServ: UserService,
        private permissionsService: NgxPermissionsService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) { //protects guarded routes
        let token: string = window.localStorage.getItem('ai-token');        
        let roles: any = this.jwtService.getTokenRoles(token);

        window.localStorage.setItem('ai-roles', roles);
        this.permissionsService.loadPermissions(roles);

        let canAccess = !(this.jwtService.ifTokenExpired(token));

        if (!canAccess) {
            window.localStorage.removeItem('ai-token');
            this.permissionsService.flushPermissions();
            this.router.navigate(['/login']);
        }
        else {
            //TODO: gestione user da visualizzare nel layout offerto dalla libreria ngx-admin-lte  

            // let username= this.jwtManagementService.getJwtUsername(token);
            // const user1 = new User( {
            //     avatarUrl: 'assets/user.png',
            //     firstname: username,
            //     lastname: ''
            // } );
    
            // user1.connected = true;
    
            // this.userServ.setCurrent( user1 );
            // this.userServ.logoutAction=()=>{
            //     const user = new User();
            //     user.connected = false;
            //     this.userServ.setCurrent( user );
            //     this.permissionsService.flushPermissions();
            //     window.localStorage.removeItem('ai-token');
            //     window.localStorage.removeItem('ai-roles');
            //     this.router.navigate(['/login']);
            // };
        }

        return of(canAccess);
    }
}