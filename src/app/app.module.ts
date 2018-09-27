import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { PasswordStrengthBarModule } from 'ng2-password-strength-bar';
import { NgxPermissionsModule } from 'ngx-permissions';
import { JwtModule } from '@auth0/angular-jwt';
import { JwtHelperService } from '@auth0/angular-jwt';


//material
import { MaterialModule } from './material/material.module';

//my components
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { AuthComponent } from './modules/auth/auth.component';
import { HomeComponent } from './components/home/home.component';

//my services
import { AuthService } from './services/auth.service';
import { SignupService } from './services/signup.service';
import { AuthGuardService } from './services/jwt/auth-guard.service';
import { JwtInterceptor } from './services/jwt/jwt-interceptor.service';
import { JwtService } from './services/jwt/jwt.service';
import { NoAuthGuardService } from './services/jwt/no-auth-guard.service';


@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MaterialModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    PasswordStrengthBarModule,
    JwtModule,
    NgxPermissionsModule.forRoot(),
    JwtModule.forRoot({
      config: {
        tokenGetter: () => {
          return localStorage.getItem('access_token');
        }
      }
    })
    //FIXME:StoreModule.forRoot(reducers)
  ],
  providers: [
    AuthGuardService,
    JwtInterceptor,
    JwtService,
    NoAuthGuardService,
    AuthService,
    SignupService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
