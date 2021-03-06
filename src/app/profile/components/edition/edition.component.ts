import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { MyValidatorsService } from '../../../core/services/my-validators.service';
import { AlertService } from '../../../core/services/alert.service';
import { UserService } from '../../../core/services/user.service';
import { emailPattern } from 'src/app/core/helpers/emailPattern';
import { AuthService } from '../../../core/services/auth.service';
import { UsersInfoResponse } from '../../../core/interfaces';
import { zip } from 'rxjs';
import { EditInfoService } from '../../../core/services/edit-info.service';
import { map } from 'rxjs/operators';

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
    const field = this.editForm.get('genero');
    return field.touched && field.errors;
  }
  get biografiaErrors() {
    const field = this.editForm.get('biografia');
    return field.touched && field.errors;
  }

  get email() {
    return this.editForm.get('usuCorreo');
  }

  constructor(
    private fb: FormBuilder,
    private myValidators: MyValidatorsService,
    private userService: UserService,
    private authService: AuthService,
    private editInfoService: EditInfoService,
    private router: Router,
    private swal: AlertService
  ) {
    this.currUser = this.userService.user;
    zip(
      this.editInfoService.getCountries(),
      this.editInfoService.getSkills(),
      this.editInfoService.getSocials()
    )
      .pipe(
        map(([paises, conocimientos, redes]) => ({
          paises,
          conocimientos,
          redes,
        }))
      )
      .subscribe((data) => {
        console.log(data);
      });
    this.editForm = this.createForm();
  }

  ngOnInit(): void {}

  getInfo() {}

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
        usuClave: [''],
        usuClave2: [''],

        genero: [
          this.currUser.perfil.genero,
          [Validators.required, Validators.min(0), Validators.max(2)],
        ],
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

    const { usuClave2, perfil, ...data } = this.editForm.value;
    const { redesSociales, ...upPerfil } = perfil;
    const updatedUser = {
      usuId: this.currUser.usuId,
      perfil: upPerfil,
    };
    console.log(updatedUser);

    this.editInfoService
      .editUserInfo(updatedUser, this.userService.accessToken)
      .subscribe((resp) => {
        console.log(resp);
      });
  }
}
