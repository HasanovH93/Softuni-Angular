import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent   {

  constructor(private router: Router, private authService: AuthService , private activatedRoute: ActivatedRoute) { 
   
  }

  
  loginHandler() {
   this.authService.user = {
    firstName : 'John',
    lastName: 'Doe'
   };

   const url = this.activatedRoute.snapshot.queryParams['url'] || '/'
   this.router.navigate(url)

  }



}
