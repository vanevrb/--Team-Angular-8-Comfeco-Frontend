import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { faCheckSquare } from '@fortawesome/free-solid-svg-icons';
import { faSquare } from '@fortawesome/free-regular-svg-icons';

import { emailPattern } from '../../helpers/emailPattern';
import { SaveLocalService } from '../../../core/services/save-local.service';
import { AuthService } from '../../../core/services/auth.service';
import { environment } from '../../../../environments/environment.prod';
import { AlertService } from '../../../core/services/alert.service';
import { UserService } from '../../../core/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  private saveEmailStoreKey = 'C0mf3c0-/S4v3-3m41l';
  login: FormGroup;
  isLoading = false;
  iconCheck = faSquare;
  iconUncheck = faCheckSquare;

  get emailErrors() {
    const field = this.login.get('usuCorreo');
    return field.touched && field.errors;
  }
  get passErrors() {
    const field = this.login.get('usuClave');
    return field.touched && field.errors;
  }

  get email() {
    return this.login.get('usuCorreo');
  }
  get checkbox() {
    return this.login.get('checkBoxRecordar');
  }

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private saveLocal: SaveLocalService,
    private swal: AlertService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.login = this.createForm();
    this.getEmailStored();
  }

  onChecked() {
    this.checkbox.patchValue(!this.checkbox.value);
  }

  getEmailStored() {
    return this.saveLocal
      .getItem(this.saveEmailStoreKey)
      .then((data) => this.email.patchValue(data))
      .catch((err) => this.email.patchValue(''));
  }

  createForm() {
    return this.fb.group({
      usuCorreo: ['', [Validators.required, Validators.pattern(emailPattern)]],
      usuClave: ['', [Validators.required, Validators.minLength(6)]],
      checkBoxRecordar: [true],
    });
  }

  onSubmit() {
    /**
     * Validate form changes or invalid data
     */
    if (this.login.pristine || this.login.invalid) {
      this.login.markAllAsTouched();
      return;
    }
    /**
     * Spread operator to separate usefull data
     */
    const { checkBoxRecordar, ...loginData } = this.login.value;
    this.isLoading = true;

    /**
     * Store the email if checkbox is checked or erase otherwise
     */
    if (this.checkbox.value) {
      this.saveLocal.setItem(this.saveEmailStoreKey, this.email.value);
    } else {
      this.saveLocal.removeItem(this.saveEmailStoreKey);
    }

    /**
     * Trigger sweet alert
     */
    this.swal.sendForm();

    /**
     * Bring data from api
     */
    this.authService.login(loginData).subscribe((data) => {
      this.isLoading = false;
      /**
       * Handle error
       */
      if (data.error) {
        const message =
          data.code === 400
            ? 'Verifica Email / Constraseña'
            : 'Ups, algo salío mal';
        return this.swal.failSwal(data.message, message);
      }

      /**
       * Save token
       */
      this.saveLocal.setItem(environment.LOCAL_KEY_FOR_SAVE, data.message);

      this.userService.username = this.email.value;

      /**
       * Restart form
       */
      this.login.reset();

      /**
       * Send succes alert
       */
      this.swal.successSwal('Login de usuario exitoso');

      /**
       * go homepage
       */
      this.router.navigateByUrl('/home');
    });
  }
}
