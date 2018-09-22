import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  errorMessage: string = '';
  loginForm: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });
  disableButton = false;

  constructor(private authService : AuthService, private router : Router) { }

  ngOnInit() {
    
  }

  loginFormSubmit(){
    this.loginForm.disable();
    this.authService.login(this.loginForm.controls.username.value , this.loginForm.controls.password.value);
    // .subscribe(
    //     () => {}, error => { 
  
    //       if(error.status == 400){
    //         this.errorMessage = JSON.parse(error._body).error_description;
    //       }
    //       else{
    //         this.errorMessage = "Error, please try later."
    //       }

    //       this.loginForm.enable();
    //       this.disableButton = false;
    //       //this.changeDetectorRef.detectChanges();
    //     } 
    // );
  }
}
