import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { MyValidatorsService } from '../../../core/services/my-validators.service';
import { AlertService } from '../../../core/services/alert.service';
import { UserService } from '../../../core/services/user.service';
import { emailPattern } from 'src/app/core/helpers/emailPattern';

@Component({
  selector: 'app-edition',
  templateUrl: './edition.component.html',
  styleUrls: ['./edition.component.scss'],
})
export class EditionComponent implements OnInit {
  editForm: FormGroup;
  isLoading = false;

  get nickErrors() {
    const field = this.editForm.get('usuNickname');
    return field.touched && field.errors;
  }
  get emailErrors() {
    const field = this.editForm.get('usuCorreo');
    return field.touched && field.errors;
  }
  get passErrors() {
    const field = this.editForm.get('usuClave');
    return field.touched && field.errors;
  }
  get confirmErrors() {
    const field = this.editForm.get('usuClave2');
    return field.touched && field.errors;
  }

  get email() {
    return this.editForm.get('usuCorreo');
  }

  constructor(
    private fb: FormBuilder,
    private myValidators: MyValidatorsService,
    private router: Router,
    private swal: AlertService,
    private userService: UserService
  ) {
    this.editForm = this.createForm();
  }

  ngOnInit(): void {}

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
        perfil: this.fb.group({
          genero: ['', [Validators.required]],
          fechaNacimiento: ['', [Validators.required]],
          pais: ['', [Validators.required]],
          biografia: ['', [Validators.required]],
          conocimientos: this.fb.array([]),
          redesSociales: this.fb.array([]),
        }),
      },
      {
        validators: this.myValidators.confirmPass('usuClave', 'usuClave2'),
      }
    );
  }

  onSubmit() {
    /**
     * Validate form changes or invalid data
     */
    if (this.editForm.pristine || this.editForm.invalid) {
      this.editForm.markAllAsTouched();
      return;
    }

    console.log(this.editForm);
  }
}
