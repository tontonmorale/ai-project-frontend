import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  token; 

  constructor(private jwtHelperService: JwtHelperService) { }

  ngOnInit() {
    this.token = this.jwtHelperService.decodeToken(window.localStorage.getItem('ai-token'));
    console.log(this.token);
  }

}