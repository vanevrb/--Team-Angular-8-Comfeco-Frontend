import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import Swal from 'sweetalert2';
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons';
import { faSquare } from '@fortawesome/free-regular-svg-icons';

import { emailPattern } from '../../helpers/emailPattern';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
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

  get checkbox() {
    return this.login.get('checkBoxRecordar');
  }

  constructor(private fb: FormBuilder, private authService: AuthService) {}

  ngOnInit(): void {
    this.login = this.createForm();
  }

  onChecked() {
    this.checkbox.patchValue(!this.checkbox.value);
  }

  createForm() {
    return this.fb.group({
      usuCorreo: ['', [Validators.required, Validators.pattern(emailPattern)]],
      usuClave: ['', [Validators.required, Validators.minLength(6)]],
      checkBoxRecordar: [false],
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
     * Trigger sweet alert
     */
    this.initSwalInfo();

    /**
     * Bring data from api
     */
    this.authService.login(loginData).subscribe((data) => {
      this.isLoading = false;
      /**
       * Handle error
       */
      if (data.error) {
        return this.failSwal(data.message, data.code);
      }

      /**
       * Send succes alert
       */
      this.successSwal('Login de usuario exitoso');

      /**
       * Restart form
       */
      this.login.reset();
    });
  }

  initSwalInfo() {
    return Swal.fire({
      icon: 'info',
      title: 'Registro enviado',
      text: 'Por favor espere...',
      allowOutsideClick: false,
      allowEscapeKey: false,
      showConfirmButton: false,
      willOpen: () => Swal.showLoading(),
    });
  }

  successSwal(data: string) {
    return Swal.fire({
      icon: 'success',
      title: '¡Gracias!',
      text: data,
      timer: 3500,
    });
  }
  failSwal(err: string, code = 500) {
    return Swal.fire({
      icon: 'error',
      title:
        code === 400 ? 'Verifica Email / Constraseña' : 'Ups, algo salío mal',
      text: err,
    });
  }
}
