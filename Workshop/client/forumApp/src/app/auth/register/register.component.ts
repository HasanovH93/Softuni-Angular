import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { map, of } from 'rxjs';
import { appEmailDomains } from 'src/app/shared/constants';
import { appEmailValidator } from 'src/app/shared/validators';
import { matchPasswordGroupValidator } from 'src/app/shared/validators/match-password-group-validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  form = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(5)]],
    email:  ['', [Validators.required, Validators.email]],
    ext: [''],
    tel: [''],
    passwords: this.fb.group({
      password: ['', [Validators.required, Validators.minLength(5)]],
      rePassword: []
    },{
      validators: [matchPasswordGroupValidator('password', 'rePassword')]
    })

  })

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  registerHandler(){
   console.log(this.form.value)
   of(1).pipe(
    map(() => {
      throw new Error('BAD ERROR!')
    })
   ).subscribe({
    next: (value) => {console.log(value)},
    error: (error) => console.log(error)
   })
  }

}
