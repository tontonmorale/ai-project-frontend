import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './services/jwt/auth-guard.service';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { NgxPermissionsGuard } from 'ngx-permissions';
 
const routes: Routes = [
  // {
  //   path: '',
  //   component: LayoutComponent,
  //   children: [
  //     { path:'', pathMatch: 'full', redirectTo:'home'},
  //     { path: 'logout', component: LogoutComponent, canActivate:[AuthGuardService], pathMatch: 'full'},
  //     { path: 'home', component: HomeComponent, canActivate:[AuthGuardService], pathMatch: 'full'},
  //     { path: 'archive', component: ArchiveComponent, canActivate:[AuthGuardService, NgxPermissionsGuard], data: {permissions: {only: ['ROLE_USER', 'ROLE_CUSTOMER'], redirectTo: 'home'}, pathMatch: 'full'}},
  //     { path: 'upload', component: UploadComponent, canActivate:[AuthGuardService, NgxPermissionsGuard],data: {permissions: {only: ['ROLE_USER', 'ROLE_CUSTOMER'], redirectTo: 'home'}, pathMatch: 'full'}},
  //     { path: 'buy', component: BuyComponent, canActivate:[AuthGuardService, NgxPermissionsGuard], data: {permissions: {only: ['ROLE_USER', 'ROLE_CUSTOMER'], redirectTo: 'home'}, pathMatch: 'full'}},
  //   ]
  // },
  { path:'', pathMatch: 'full', redirectTo:'login' },
  { path: 'login', component: LoginComponent, pathMatch: 'full'},
  { path: 'home', component: HomeComponent, canActivate:[AuthGuardService], pathMatch: 'full'},
  //TODO: archive, upload, buy
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}