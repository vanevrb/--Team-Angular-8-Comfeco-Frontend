import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import Swal from 'sweetalert2';
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons';
import { faSquare } from '@fortawesome/free-regular-svg-icons';

import { emailPattern } from '../../helpers/emailPattern';
import { AuthService } from '../../../core/services/auth.service';
import { ModalService } from '../../../core/services/modal.service';
import { MyValidatorsService } from '../../../core/services/my-validators.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  register: FormGroup;
  isLoading = false;
  isChecked = false;
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
    private myValidators: MyValidatorsService
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
        usuNickname: ['', [Validators.required, Validators.minLength(3)]],
        usuCorreo: [
          '',
          [Validators.required, Validators.pattern(emailPattern)],
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
    if (this.register.pristine || this.register.invalid) {
      this.register.markAllAsTouched();
      return;
    }
    this.isLoading = true;

    const { usuClave2, checkBoxAceptar, ...dataRegister } = this.register.value;

    this.initSwalInfo();
    this.authService.newUser(dataRegister).subscribe((data) => {
      if (data.error) {
        return this.failSwal(data.message);
      }
      this.successSwal(data.message);
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
