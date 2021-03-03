import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import Swal from 'sweetalert2';

import { emailPattern } from '../../../core/helpers/emailPattern';
import { AuthService } from '../../../core/services/auth.service';
import { ModalService } from '../../../core/services/modal.service';
import { MyValidatorsService } from '../../../core/services/my-validators.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-restore',
  templateUrl: './restore.component.html',
  styleUrls: ['./restore.component.scss'],
})
export class RestoreComponent implements OnInit {
  restore: FormGroup;
  isLoading = false;
  isChecked = false;

  token: string;

  get emailErrors() {
    const field = this.restore.get('usuCorreo');
    return field.touched && field.errors;
  }
  get passErrors() {
    const field = this.restore.get('clave');
    return field.touched && field.errors;
  }
  get confirmErrors() {
    const field = this.restore.get('usuClave2');
    return field.touched && field.errors;
  }

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private modalService: ModalService,
    private myValidators: MyValidatorsService,
    private activatedRoute: ActivatedRoute
  ) {
    this.restore = this.createForm();
  }

  ngOnInit(): void {
    // .subscribe((data) => {
    //   console.log(data);
    // });
  }

  onClick() {
    this.modalService.openModal();
  }

  createForm() {
    return this.fb.group(
      {
        usuCorreo: [
          '',
          [Validators.required, Validators.pattern(emailPattern)],
        ],
        clave: ['', [Validators.required, Validators.minLength(6)]],
        usuClave2: ['', [Validators.required]],
      },
      {
        validators: this.myValidators.confirmPass('clave', 'usuClave2'),
      }
    );
  }

  onSubmit() {
    if (this.restore.pristine || this.restore.invalid) {
      this.restore.markAllAsTouched();
      return;
    }
    this.isLoading = true;

    const { usuClave2, usuCorreo, ...datarestore } = this.restore.value;

    this.initSwalInfo();
    this.activatedRoute.params
      .pipe(
        switchMap((data) =>
          this.authService.restorePassword({
            ...datarestore,
            tokenId: data.token,
          })
        )
      )
      .subscribe((data) => {
        console.log(data);
        if (data.error) {
          return this.failSwal(data.message);
        }
        this.successSwal(data.message);
        this.isLoading = false;
        this.restore.reset();
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
