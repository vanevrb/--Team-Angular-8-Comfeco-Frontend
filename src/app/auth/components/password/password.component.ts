import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { emailPattern } from '../../../core/helpers/emailPattern';
import { AuthService } from '../../../core/services/auth.service';
import { Router } from '@angular/router';
import { AlertService } from '../../../core/services/alert.service';
import { Store } from '@ngrx/store';
import { AppState } from '../../../store/reducers/index';

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

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private swal: AlertService,
    private store: Store<AppState>,
    private authService: AuthService
  ) {}

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
    this.authService
      .forgotPassword(this.forgot.get('usuCorreo').value)
      .subscribe((data) => {
        /**
         * Handle error
         */
        if (data.error) {
          return this.swal.failSwal(data.message, 'Ups, algo salío mal');
        }

        /**
         * Restart form
         */
        this.forgot.reset();

        /**
         * Send succes alert
         */
        this.swal.successSwal(
          'Por favor revise la bandeja de entrada de su correo electrónico'
        );

        /**
         * go loginpage
         */
        this.router.navigate(['auth', 'login']);
      });
  }
}
