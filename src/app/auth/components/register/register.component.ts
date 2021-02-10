import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { emailPattern } from '../../helpers/emailPattern';
import { AuthService } from '../../../core/services/auth.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  register: FormGroup;
  isLoading = false;

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.register = this.createForm();
  }

  ngOnInit(): void {}

  createForm() {
    return this.fb.group({
      usuNickname: ['', [Validators.required, Validators.minLength(3)]],
      usuCorreo: ['', [Validators.required, Validators.pattern(emailPattern)]],
      usuClave: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit() {
    if (this.register.pristine || this.register.invalid) {
      this.register.markAllAsTouched();
      return;
    }
    this.isLoading = true;
    this.initSwalInfo();
    this.authService.newUser(this.register.value).subscribe((data) => {
      if (data.error) {
        return this.failSwal(data.mensaje);
      }
      this.successSwal(data.mensaje);
      this.isLoading = false;
      this.register.reset();
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
  failSwal(err: string) {
    return Swal.fire({
      icon: 'error',
      title: 'Ups, algo salío mal',
      text: err,
    });
  }
}
