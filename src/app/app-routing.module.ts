import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './services/auth-guard.service';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
 
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
  // { path:'', pathMatch: 'full', redirectTo:'home' },
  // { path: 'login', component: LoginComponent, canActivate:[AuthGuardService], pathMatch: 'full'},
  // { path: 'home', component: HomeComponent, canActivate:[AuthGuardService], pathMatch: 'full'},
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}