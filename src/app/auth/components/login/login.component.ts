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
  isChecked = false;
  iconCheck = faSquare;
  iconUncheck = faCheckSquare;

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.login = this.createForm();
  }

  ngOnInit(): void {}

  onChecked() {
    this.isChecked = !this.isChecked;
  }

  createForm() {
    return this.fb.group({
      usuCorreo: ['', [Validators.required, Validators.pattern(emailPattern)]],
      usuClave: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit() {
    if (this.login.pristine || this.login.invalid) {
      this.login.markAllAsTouched();
      return;
    }
    this.isLoading = true;
    this.initSwalInfo();
    this.authService.login(this.login.value).subscribe((data) => {
      this.isLoading = false;
      if (data.error) {
        return this.failSwal(data.mensaje, data.codigo);
      }
      this.successSwal('Login de usuario exitoso');
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
  failSwal(err: string, code: number) {
    return Swal.fire({
      icon: 'error',
      title:
        code === 400 ? 'Verifica Email / Constraseña' : 'Ups, algo salío mal',
      text: err,
    });
  }
}
