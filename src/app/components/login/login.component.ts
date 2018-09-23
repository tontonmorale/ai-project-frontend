import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loading = false;
  errorMessage: string = '';
  loginForm: FormGroup;
  disableButton = false;

  constructor(private authService : AuthService, private router : Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });

    // reset login status
    this.authService.logout();
  }

  loginFormSubmit(){
    if(this.loginForm.invalid){
      return;
    }
    this.loading = true;
    this.authService.login(this.loginForm.controls.username.value , this.loginForm.controls.password.value)
      .subscribe(
          response => {
            this.router.navigate(['/home']);
          },
          error => {    
            if(error.status == 400){
              // 400 bad request
              this.errorMessage = JSON.parse(error._body).error_description;
            }
            else{
              this.errorMessage = "Error, please try later."
            }
          } 
      );
  }
}
