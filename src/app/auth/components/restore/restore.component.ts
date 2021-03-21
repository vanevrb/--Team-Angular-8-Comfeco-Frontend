import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { switchMap } from 'rxjs/operators';

import { AuthService } from '../../../core/services/auth.service';
import { ModalService } from '../../../core/services/modal.service';
import { MyValidatorsService } from '../../../core/services/my-validators.service';
import { AlertService } from '../../../core/services/alert.service';

@Component({
  selector: 'app-restore',
  templateUrl: './restore.component.html',
  styleUrls: ['./restore.component.scss'],
})
export class RestoreComponent {
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
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private swal: AlertService
  ) {
    this.restore = this.createForm();
  }

  onClick() {
    this.modalService.openModal();
  }

  createForm() {
    return this.fb.group(
      {
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

    const { usuClave2, ...datarestore } = this.restore.value;

    this.swal.sendForm();
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
        if (data.error) {
          this.router.navigate(['auth', 'login']);

          return this.swal.failSwal(data.error.error.message, 'Token expirado');
        }
        this.swal.successSwal(data.message);
        this.isLoading = false;
        this.restore.reset();
        this.router.navigate(['auth', 'login']);
      });
  }
}
