import { Component, OnInit } from '@angular/core';
import {  FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  genders = ['male', 'female'];
  signUpForm: FormGroup;
  forbiddenUserNames = ['Chris', "Anna"]
  

  ngOnInit(){
    this.signUpForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
        'email': new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmails.bind(this)),
      }),

      'gender': new FormControl('male', Validators.required),
      'hobbies': new FormArray([])
    });
    // this.signUpForm.valueChanges.subscribe(
    //   (value) => console.log(value)
    // )
   
    this.signUpForm.statusChanges.subscribe(
      (status) => console.log(status)
    )
    // this.signUpForm.setValue({
    //   'userData': {
    //     'username': 'Max',
    //     'email': 'Max@test.com'
    //   },
    //   gender: 'male',
    //   hobbies: []
    // })
    this.signUpForm.patchValue({
      'userData': {
            'username': 'Max',
            'email': 'Max@test.com'
      }
    })

  }

  onSubmit(){
    console.log(this.signUpForm)
    this.signUpForm.reset()
  }

  onAddHobbies(){
    const control = new FormControl(null, Validators.required);
     (<FormArray>this.signUpForm.get('hobbies')).push(control)
  }

  getControls() {
    return (<FormArray>this.signUpForm.get('hobbies')).controls;
  }

  forbiddenNames(control : FormControl): {[s: string]: boolean} {
    if(this.forbiddenUserNames.indexOf(control.value) !== -1){
      return {'nameIsForbidden': true}
    }
    return null;
  }

  forbiddenEmails(control : FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((res, rej) => {
      setTimeout(() => {
        if(control.value === "test@test.com"){
          res({'EmailIsForbidden': true})
        }else {
          res(null)
        }
      },1500)
    })
    return promise;
  }
}
