import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { emailPattern } from '../../../core/helpers/emailPattern';
import { AuthService } from '../../../core/services/auth.service';
import { ModalService } from '../../../core/services/modal.service';
import { MyValidatorsService } from '../../../core/services/my-validators.service';
import { AlertService } from '../../../core/services/alert.service';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../../store/reducers/index';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  register: FormGroup;
  isLoading$: Observable<boolean>;

  get nickErrors() {
    const field = this.register.get('usuNickname');
    return field.touched && field.errors;
  }
  get emailErrors() {
    const field = this.register.get('usuCorreo');
    return field.touched && field.errors;
  }
  get passErrors() {
    const field = this.register.get('usuClave');
    return field.touched && field.errors;
  }
  get confirmErrors() {
    const field = this.register.get('usuClave2');
    return field.touched && field.errors;
  }

  get activeUsuClave() {
    return !!this.register.get('usuClave').value;
  }

  get email() {
    return this.register.get('usuCorreo');
  }
  get checkbox() {
    return this.register.get('checkBoxAceptar');
  }
  get checkboxErrors() {
    const field = this.register.get('checkBoxAceptar');
    return field.touched && field.errors;
  }

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private modalService: ModalService,
    private myValidators: MyValidatorsService,
    private router: Router,
    private swal: AlertService,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.isLoading$ = this.store
      .select('loader')
      .pipe(map((data) => data.isLoading));
    this.register = this.createForm();
  }

  onChecked() {
    this.checkbox.patchValue(!this.checkbox.value);
  }

  onClick() {
    this.modalService.openModal();
  }

  createForm() {
    return this.fb.group(
      {
        usuNickname: [
          '',
          [Validators.required, Validators.minLength(3)],
          [this.myValidators.validNick(this.authService)],
        ],
        usuCorreo: [
          '',
          [Validators.required, Validators.pattern(emailPattern)],
          [this.myValidators.validEmail(this.authService)],
        ],
        usuClave: ['', [Validators.required, Validators.minLength(6)]],
        usuClave2: ['', [Validators.required]],
        checkBoxAceptar: [false, [Validators.requiredTrue]],
      },
      {
        validators: this.myValidators.confirmPass('usuClave', 'usuClave2'),
      }
    );
  }

  onSubmit() {
    /**
     * Validate form changes or invalid data
     */
    if (this.register.pristine || this.register.invalid) {
      this.register.markAllAsTouched();
      return;
    }
    /**
     * Spread operator to separate usefull data
     */
    const { usuClave2, checkBoxAceptar, ...dataRegister } = this.register.value;

    /**
     * Bring data from api
     */
    this.authService.newUser(dataRegister).subscribe((data) => {
      /**
       * Handle error
       */
      if (data.error) {
        return this.swal.failSwal(data.message, 'Ups, algo salío mal');
      }

      /**
       * Restart form
       */
      this.register.reset();

      /**
       * Send succes alert
       */
      this.swal.successSwal('Regitro exitoso');

      /**
       * go loginpage
       */
      this.router.navigate(['auth', 'login']);
    });
  }
}
