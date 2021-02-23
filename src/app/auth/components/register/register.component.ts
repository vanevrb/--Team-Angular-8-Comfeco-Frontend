import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { switchMap } from 'rxjs/operators';
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons';
import { faSquare } from '@fortawesome/free-regular-svg-icons';

import { emailPattern } from '../../helpers/emailPattern';
import { AuthService } from '../../../core/services/auth.service';
import { ModalService } from '../../../core/services/modal.service';
import { MyValidatorsService } from '../../../core/services/my-validators.service';
import { SaveLocalService } from '../../../core/services/save-local.service';
import { environment } from 'src/environments/environment';
import { AlertService } from '../../../core/services/alert.service';
import { UserService } from '../../../core/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  register: FormGroup;
  isLoading = false;
  iconCheck = faSquare;
  iconUncheck = faCheckSquare;

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
    private saveLocal: SaveLocalService,
    private swal: AlertService,
    private userService: UserService
  ) {
    this.register = this.createForm();
  }

  ngOnInit(): void {}

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
    this.isLoading = true;

    /**
     * Trigger sweet alert
     */
    this.swal.sendForm();

    /**
     * Bring data from api
     */
    this.authService
      .newUser(dataRegister)
      .pipe(
        switchMap(() =>
          this.authService.login({
            usuCorreo: dataRegister.usuCorreo,
            usuClave: dataRegister.usuClave,
          })
        )
      )
      .subscribe((data) => {
        this.isLoading = false;
        /**
         * Handle error
         */
        if (data.error) {
          return this.swal.failSwal(data.message, 'Ups, algo salío mal');
        }
        /**
         * Save token
         */
        this.saveLocal.setItem(environment.LOCAL_KEY_FOR_SAVE, data.message);
        this.userService.username = this.email.value;

        /**
         * Restart form
         */
        this.register.reset();

        /**
         * Send succes alert
         */
        this.swal.successSwal('Login de usuario exitoso');

        /**
         * go homepage
         */
        this.router.navigate(['home']);
      });
  }
}
