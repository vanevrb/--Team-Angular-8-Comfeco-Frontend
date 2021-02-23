import { Injectable } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { debounceTime, map, catchError } from 'rxjs/operators';
import { AuthService } from './auth.service';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MyValidatorsService {
  validEmail(service: AuthService) {
    return (ctrl: AbstractControl) => {
      if (!ctrl.value) {
        return { required: true };
      }
      return service.canRegisterEmail(ctrl.value).pipe(
        debounceTime(1000),
        map((data) => {
          if (!data) {
            return null;
          }
          return { notAvailable: true };
        }),
        catchError(() => {
          return of(null);
        })
      );
    };
  }
  validNick(service: AuthService) {
    return (ctrl: AbstractControl) => {
      if (!ctrl.value) {
        return { required: true };
      }
      return service.canRegisterNick(ctrl.value).pipe(
        debounceTime(400),
        map((data) => {
          if (!data) {
            return null;
          }
          return { notAvailable: true };
        }),
        catchError(() => {
          return of(null);
        })
      );
    };
  }

  confirmPass(password: string, confirmPassword: string): any {
    return (formGroup: FormGroup) => {
      const pass1 = formGroup.controls[password];
      const pass2 = formGroup.controls[confirmPassword];
      return pass1.value === pass2.value
        ? pass2.setErrors(null)
        : pass2.setErrors({ noConfirmPass: true });
    };
  }

  errorMessage() {}
}
