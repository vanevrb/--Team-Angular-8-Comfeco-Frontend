import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class MyValidatorsService {
  confirmPass(password: string, confirmPassword: string): any {
    return (formGroup: FormGroup) => {
      const pass1 = formGroup.controls[password];
      const pass2 = formGroup.controls[confirmPassword];
      return pass1.value === pass2.value
        ? pass2.setErrors(null)
        : pass2.setErrors({ noConfirmPass: true });
    };
  }
}
