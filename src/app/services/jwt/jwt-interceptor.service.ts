import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from "@angular/router";

@Injectable()
export class JwtInterceptor implements HttpInterceptor {    // add jwt to outcoming requests if available

    constructor(private router : Router){}
    
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        
        let token = window.localStorage.getItem("ai-token");

        if (token) {
            request = request.clone({
                setHeaders: { 
                    Authorization: 'Bearer ' + token
                }
            });
        }

        return next.handle(request).pipe(
            tap(event => {}, err => {
                if(err instanceof HttpErrorResponse){
                    this.router.navigateByUrl("/connectionError");
                }
            })
        );
    }
}