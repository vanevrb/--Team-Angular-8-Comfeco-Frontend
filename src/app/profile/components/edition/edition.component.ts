import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { MyValidatorsService } from '../../../core/services/my-validators.service';
import { AlertService } from '../../../core/services/alert.service';
import { UserService } from '../../../core/services/user.service';
import { emailPattern } from 'src/app/core/helpers/emailPattern';
import { AuthService } from '../../../core/services/auth.service';
import { UsersInfoResponse } from '../../../core/interfaces';

@Component({
  selector: 'app-edition',
  templateUrl: './edition.component.html',
  styleUrls: ['./edition.component.scss'],
})
export class EditionComponent implements OnInit {
  editForm: FormGroup;
  isLoading = false;
  private currUser: UsersInfoResponse;

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
  get generoErrors() {
    const field = this.perfil.get('genero');
    return field.touched && field.errors;
  }
  get biografiaErrors() {
    const field = this.perfil.get('biografia');
    return field.touched && field.errors;
  }

  get email() {
    return this.editForm.get('usuCorreo');
  }
  get perfil() {
    return this.editForm.get('perfil') as FormGroup;
  }

  constructor(
    private fb: FormBuilder,
    private myValidators: MyValidatorsService,
    private userService: UserService,
    private authService: AuthService,
    private router: Router,
    private swal: AlertService
  ) {
    this.currUser = this.userService.user;
    console.log(this.currUser);
    this.editForm = this.createForm();
  }

  ngOnInit(): void {}

  createForm() {
    return this.fb.group(
      {
        usuNickname: [
          this.currUser.usuNickname,
          [Validators.required, Validators.minLength(3)],
        ],
        usuCorreo: [
          this.currUser.usuCorreo,
          [Validators.required, Validators.pattern(emailPattern)],
        ],
        usuClave: ['', [Validators.required, Validators.minLength(6)]],
        usuClave2: ['', [Validators.required]],
        perfil: this.fb.group({
          genero: [this.currUser.perfil.genero, [Validators.required]],
          fechaNacimiento: [this.currUser.perfil.fechaNacimiento],
          pais: [this.currUser.perfil.pais],
          biografia: [
            this.currUser.perfil.biografia,
            [Validators.maxLength(140)],
          ],
          conocimientos: [this.currUser.perfil.conocimientos],
          redesSociales: this.fb.group({
            facebook: this.currUser.perfil.redesSociales['facebook'],
            github: this.currUser.perfil.redesSociales['github'],
            linkedin: this.currUser.perfil.redesSociales['linkedin'],
            twitter: this.currUser.perfil.redesSociales['twitter'],
          }),
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
      this.perfil.markAllAsTouched();
      return;
    }

    const { usuClave2, ...data } = this.editForm.value;
    const updatedUser = {
      usuId: this.currUser.usuId,
      ...data,
    };
    console.log(updatedUser);

    this.authService
      .editUserInfo(updatedUser, this.userService.accessToken)
      .subscribe((resp) => {
        console.log(resp);
      });
  }
}
