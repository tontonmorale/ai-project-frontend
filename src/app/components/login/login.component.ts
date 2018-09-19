import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  //TODO:errorMessage: string = '';
  loginForm: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });
  disableButton = 

  constructor(private loginService : LoginService, private router : Router) { }

  ngOnInit() {
    
  }

  submitLoginForm(){
    this.form.disable();
    this.authService.login(this.form.controls.username.value , this.form.controls.password.value).subscribe(
        () => {}, error => { 
  
          if(error.status == 400){
            this.errorMessage = JSON.parse(error._body).error_description;
          
          }
          else{
            this.errorMessage = "Error, please try later."
          }

          this.form.enable();
          this.disableButton = false;
          this.changeDetectorRef.detectChanges();
        } 
    );
  }
}
