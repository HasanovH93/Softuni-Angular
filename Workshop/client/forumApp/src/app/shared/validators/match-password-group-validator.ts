import { FormGroup, ValidatorFn } from "@angular/forms";

export function matchPasswordGroupValidator(password: string, rePassword: string): ValidatorFn {
   return  (control) => {
    const group = control as FormGroup;
    const control1 = group.get(password);
    const control2 = group.get(rePassword)

    return control1?.value === control2?.value ? null : {matchPasswordGroupValidator : true}
   }
}