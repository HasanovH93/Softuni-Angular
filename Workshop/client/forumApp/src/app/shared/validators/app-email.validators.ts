import { ValidatorFn } from "@angular/forms";

export function appEmailValidator(domains:string[]): ValidatorFn {
    const domainsString = domains.join('|');
    const re = new RegExp(`^[^@]{6,}@gmail\.${domainsString})$`)
    
    return (control) => {
        return (control.value === '' || re.test(control.value))   ? null : { appEmailValidator : true}
    }
}


// /[^@]{6,}@gmail\.(com|bg)/