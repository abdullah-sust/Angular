import { AbstractControl, Validator, NG_VALIDATORS } from '@angular/forms';
import { Directive, Input } from '@angular/core';

@Directive({
    selector: '[passwordMatch]',
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: CustomValidationDirective,
        multi: true
    }]
})
export class CustomValidationDirective implements Validator{

    @Input() passwordMatch: string;
    validate(ac: AbstractControl): {[key: string]: any} | null {
        const password1 = ac.parent.get(this.passwordMatch);
        console.log(password1.value + ac.value);
        if( password1 && ( password1.value !== ac.value )) {
            return { 'passwordError': true };
        }
        // if(true) {

        // }
        // console.log(ac.get('password1').value);
        // console.log(ac.get('password2').value);
        return null;
    }
    // static PasswordMatch(AC: AbstractControl) {
    //     let password1 = AC.get('password1').value;
    //     let password2 = AC.get('password2').value;

    //     if( password1 != password2 ) {
    //         AC.get(password2).setErrors({ passwordError: true });
    //         console.log('false');
    //     } else {
    //         console.log('true');
    //         // AC.get(password2).setErrors({ passwordError: false });
    //         return false;
    //     }
    // }
}