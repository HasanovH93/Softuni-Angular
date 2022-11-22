import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('loginForm', {static: true}) loginForm!: NgForm
  constructor() { }

  ngOnInit(): void {
    this.loginForm.valueChanges?.subscribe(console.log)
  }
  handleFormSubmit(value: {email: string; password: string}) :void{
    console.log(value)

  }
}
