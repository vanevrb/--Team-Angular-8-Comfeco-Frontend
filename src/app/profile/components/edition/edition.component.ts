import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormArray,
  FormControl,
} from '@angular/forms';
import { Router } from '@angular/router';

import { MyValidatorsService } from '../../../core/services/my-validators.service';
import { AlertService } from '../../../core/services/alert.service';
import { UserService } from '../../../core/services/user.service';
import { emailPattern } from 'src/app/core/helpers/emailPattern';
import { UsersInfoResponse } from '../../../core/interfaces';
import { zip } from 'rxjs';
import { EditInfoService } from '../../../core/services/edit-info.service';
import { map } from 'rxjs/operators';
import { EditUsers } from '../../../core/models/EditUsers';
import { Profile } from '../../../core/interfaces/Profile';
import { RedesSociales } from '../../../core/interfaces/RedesSociales';
import { Knowledge } from '../../../core/enums/Knowledge';
import { ProfileDetails } from '../../../core/models/ProfileDetails';
import { SocialNames } from '../../../core/enums/SocialNames';

@Component({
  selector: 'app-edition',
  templateUrl: './edition.component.html',
  styleUrls: ['./edition.component.scss'],
})
export class EditionComponent implements OnInit {
  editForm: FormGroup;
  isLoading = false;
  renderPaises: any;
  renderConoc: any;

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

  get activeUsuClave() {
    return !!this.editForm.get('usuClave').value;
  }

  get email() {
    return this.editForm.get('usuCorreo');
  }

  get redesSociales() {
    return this.editForm.get('redesSociales') as FormArray;
  }

  constructor(
    private fb: FormBuilder,
    private myValidators: MyValidatorsService,
    private userService: UserService,
    private editInfoService: EditInfoService,
    private router: Router,
    private swal: AlertService
  ) {
    this.currUser = this.userService.user;
  }

  ngOnInit(): void {
    zip(
      this.editInfoService.getCountries(),
      this.editInfoService.getSkills(),
      this.editInfoService.getSocials()
    )
      .pipe(
        map(([pais, conocimientos, redesSociales]) => ({
          pais,
          conocimientos,
          redesSociales,
        }))
      )
      .toPromise()
      .then((data) => {
        this.renderPaises = data.pais;
        this.renderConoc = data.conocimientos;
        this.editForm = this.createForm();
        data.redesSociales.forEach((item) => {
          const valControl = this.currUser.perfil.redesSociales.find(
            (red) => red.redSocial.idRedSocial === item.idRedSocial
          );

          this.redesSociales.push(
            this.fb.control(!valControl ? '' : valControl.usuario)
          );
        });
      });
  }

  getRedSocialNombre(id: number) {
    return SocialNames[id];
  }

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
        pais: [this.currUser.perfil.pais.idPais],
        biografia: [
          this.currUser.perfil.biografia,
          [Validators.maxLength(140)],
        ],
        conocimientos: [
          this.currUser.perfil.conocimientos.map((val) => val.idConocimiento),
        ],
        redesSociales: this.fb.array([]),
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

    const perfil: Profile = new ProfileDetails(
      this.currUser.perfil.idPerfil,
      +this.editForm.get('genero').value,
      +this.editForm.get('pais').value,
      this.editForm.get('biografia').value,
      this.editForm.get('fechaNacimiento').value,
      this.editForm.get('conocimientos').value,
      this.redesSociales.value
    );

    const newData = new EditUsers(
      this.currUser.usuId,
      this.editForm.get('usuNickname').value,
      this.editForm.get('usuCorreo').value,
      perfil
    );

    console.log(newData);

    this.editInfoService
      .editUserInfo(newData, this.userService.accessToken)
      .subscribe((resp) => {
        console.log(resp);
      });
  }
}
