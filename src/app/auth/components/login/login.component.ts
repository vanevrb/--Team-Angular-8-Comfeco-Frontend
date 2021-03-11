import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';
import { tap, map, switchMap } from 'rxjs/operators';

import { emailPattern } from '../../../core/helpers/emailPattern';
import { SaveLocalService } from '../../../core/services/save-local.service';
import { AuthService } from '../../../core/services/auth.service';
import { environment } from '../../../../environments/environment.prod';
import { AlertService } from '../../../core/services/alert.service';
import { UserService } from '../../../core/services/user.service';
import { EditInfoService } from '../../../core/services/edit-info.service';
import {
  UsersInfoResponse,
  Response,
  TokenResponse,
} from '../../../core/interfaces';
import { Store } from '@ngrx/store';
import * as UIActions from '../../../store/actions';
import { AppState } from '../../../store/reducers';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  private saveEmailStoreKey = 'C0mf3c0-/S4v3-3m41l';
  login: FormGroup;
  isLoading = false;
  storeLoader$: Observable<boolean>;

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
    private editInfoService: EditInfoService,
    private router: Router,
    private saveLocal: SaveLocalService,
    private swal: AlertService,
    private userService: UserService,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.login = this.createForm();
    this.getEmailStored();
    this.storeLoader$ = this.store.select('loader').pipe(
      map((state) => state.isLoading),
      tap((flag) => {
        this.isLoading = flag;
      })
    );
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
    this.store.dispatch(UIActions.activateLoader());

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
    this.authService
      .login(loginData)
      .pipe(
        map<Response, TokenResponse>((data) => data.message),
        tap((resp) => {
          this.saveLocal.setItem(
            environment.LOCAL_KEY_FOR_SAVE,
            resp.access_token
          );
        }),
        switchMap((resp) => this.editInfoService.getUserInfo(resp.access_token))
      )
      .subscribe((data) => {
        /**
         * Handle error
         */
        if (data.error) {
          const message =
            data.code === 400
              ? 'Verifica Email / Contraseña'
              : 'Ups, algo salío mal';
          this.store.dispatch(UIActions.stopLoader());

          return this.swal.failSwal(data.message, message);
        }

        this.userService.user = data.message;

        /**
         * Restart form
         */
        this.login.reset();

        /**
         * Close alert
         */
        this.swal.closeSwal();

        this.store.dispatch(UIActions.stopLoader());

        /**
         * go homepage
         */
        this.router.navigate(['home']);
      });
  }
}
