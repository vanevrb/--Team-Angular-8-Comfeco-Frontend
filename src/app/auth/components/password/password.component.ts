import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { emailPattern } from '../../../core/helpers/emailPattern';
import { AuthService } from '../../../core/services/auth.service';
import { Router } from '@angular/router';
import { AlertService } from '../../../core/services/alert.service';
import { Store } from '@ngrx/store';
import { AppState } from '../../../store/reducers/index';
import { loginActions } from 'src/app/store/actions';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss'],
})
export class PasswordComponent implements OnInit {
  forgot: FormGroup;

  get emailErrors() {
    const field = this.forgot.get('usuCorreo');
    return field.touched && field.errors;
  }

  get email() {
    return this.forgot.get('usuCorreo').value;
  }

  constructor(private fb: FormBuilder, private store: Store<AppState>) {}

  ngOnInit(): void {
    this.forgot = this.createForm();
  }

  createForm() {
    return this.fb.group({
      usuCorreo: ['', [Validators.required, Validators.pattern(emailPattern)]],
    });
  }

  onSubmit() {
    if (this.forgot.pristine || this.forgot.invalid) {
      this.forgot.markAllAsTouched();
      return;
    }
    console.log(this.email);
    this.store.dispatch(loginActions.forgotPassword({ email: this.email }));
    this.forgot.reset();
  }
}
