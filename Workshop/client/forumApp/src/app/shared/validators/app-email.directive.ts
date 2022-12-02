import { Directive, Input, OnChanges, SimpleChanges } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn } from '@angular/forms';
import { appEmailValidator } from './app-email.validators';

@Directive({
  selector: '[appAppEmail]',
  providers: [{provide: NG_VALIDATORS,useExisting:AppEmailDirective, multi: true}]
})
export class AppEmailDirective implements Validator, OnChanges{

  @Input() appAppEmail: string[] = [];
  validator: ValidatorFn = () => null;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    const appEmailChange = changes['appAppEmail']
   if(appEmailChange){
    this.validator = appEmailValidator(appEmailChange.currentValue)
   }
  }

  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    return this.validator(control)
  }

}
