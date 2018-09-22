// import { Injectable, OnDestroy } from '@angular/core';
// import { Headers, RequestOptions, Http} from '@angular/http';
// import 'rxjs/add/operator/map';
// import { Router } from '@angular/router';
// import { retry } from 'rxjs/operators';

// @Injectable()
// export class LoginService implements OnDestroy {

//     private subscription: ISubscription;
    
//     basic_url :String;

//     constructor(private http : Http, private  router: Router) {
//         this.basic_url = environment.API_URL;
//     }

//     login( username : string, password : string) {

//         let result = false;

//         let headers = new Headers( );
//             headers.append( 'Content-Type', 'application/x-www-form-urlencoded' );
//             headers.append('authorization','Basic Zm9vQ2xpZW50SWRQYXNzd29yZDpzZWNyZXQ=');
        
//         let body = new URLSearchParams();
//         body.set('grant_type', 'password');
//         body.set('username', username);
//         body.set('password', password);
//         body.set('client_id', 'fooClientIdPassword');

//         let opts = new RequestOptions();
//         opts.headers = headers;    

//         let targetUrl = this.basic_url + "/oauth/token";

//         let postObservable: Observable<any> = this.http.post(
//             targetUrl,
//             body.toString(),
//             opts
//         ).pipe(retry(3));

//         let jsonObservable: Observable<any> = postObservable.map(
//             ( response ) => {
//                 console.log(response);
//                 return response.json();
//             }
//         );

//         this.subscription = jsonObservable.subscribe((json) =>{
//             //console.log(json);
//             //console.log(json.access_token);
//             window.localStorage.setItem('ai-token', json.access_token);
//             this.router.navigate(['/home']);
//         });

//         return jsonObservable;

//     }

// ngOnDestroy(): void {
//     if(this.subscription !== null && this.subscription !== undefined){
//         this.subscription.unsubscribe();
//     }
// }


// }

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { map, retry } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Observable, Subscription } from 'rxjs';
import { Router } from '@angular/router';




@Injectable({ providedIn: 'root' })
export class AuthService {
    basicUrl: string;
    private subscription: Subscription;

    constructor(private http: HttpClient,  private  router: Router) {
        this.basicUrl = environment.API_URL;
    }

    login(username: string, password: string) {
        let targetUrl = this.basicUrl + "/oauth/token";

        let body = new URLSearchParams();
            body.set('grant_type', 'password');
            body.set('username', username);
            body.set('password', password);
            body.set('client_id', 'fooClientIdPassword');

        let bodyString = body.toString();

        const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type':  'application/x-www-form-urlencoded',
              'authorization': 'Basic Zm9vQ2xpZW50SWRQYXNzd29yZDpzZWNyZXQ=' //FIXME:
            })
        };

        let postObs: Observable<any> = this.http
            .post(
                targetUrl,
                bodyString,
                httpOptions
            )
            .pipe(
                retry(3),              
            );
        
            return postObs.subscribe((response) =>{
                console.log(response);
                console.log(response.access_token);
                window.localStorage.setItem('ai-token', response.access_token);
                //this.router.navigate(['/home']);
            });
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}
 