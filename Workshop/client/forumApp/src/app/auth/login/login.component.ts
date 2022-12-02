import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent   {
  @ViewChild(NgForm, {static: true}) form!: ElementRef<HTMLInputElement>
  constructor(private router: Router, private authService: AuthService , private activatedRoute: ActivatedRoute) { 
   
  }

  
  loginHandler(form: NgForm): void {
    console.log(form)
    if(form.invalid){
      return
    }
   this.authService.user = {
    firstName : 'John',
    lastName: 'Doe'
   };

   const url = this.activatedRoute.snapshot.queryParams['url'] || '/'
   this.router.navigate(url)

  }



}
