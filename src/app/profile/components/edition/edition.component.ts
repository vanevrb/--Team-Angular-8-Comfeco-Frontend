import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';

import { Store } from '@ngrx/store';
import { AppStateWithUsers } from '../../../store/reducers/index';
import { imageActions, usersActions } from 'src/app/store/actions';

import { Observable, from, zip } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';

import { MyValidatorsService } from '../../../core/services/my-validators.service';
import { emailPattern } from '../../../core/helpers/emailPattern';
import { EditInfoService } from '../../../core/services/edit-info.service';

import {
  UsersInfoResponse,
  RedesSociales,
  Paises,
  Conocimientos,
  Profile,
} from '../../../core/interfaces';

import { ProfileDetails } from '../../../core/models/ProfileDetails';
import { EditUsers } from '../../../core/models/EditUsers';

import { SocialNames } from '../../../core/enums/SocialNames';

import { CloudinaryService } from '../../../core/services/cloudinary.service';

@Component({
  selector: 'app-edition',
  templateUrl: './edition.component.html',
  styleUrls: ['./edition.component.scss'],
})
export class EditionComponent implements OnInit {
  currUser$: Observable<Partial<UsersInfoResponse>>;
  editForm: FormGroup;
  paises: Paises[];
  skills: Conocimientos[];
  redes: RedesSociales[];

  widget: any;

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
    private editInfoService: EditInfoService,
    private router: Router,
    private cloudinaryService: CloudinaryService,
    private store: Store<AppStateWithUsers>
  ) {
    this.widget = this.cloudinaryService.myWidget;
  }

  ngOnInit(): void {
    this.currUser$ = from(this.createForm()).pipe(
      tap((data) => {
        this.editForm = data;
      }),
      switchMap(() =>
        this.editInfoService.getCountries().pipe(
          tap((data) => {
            this.paises = data;
          })
        )
      ),
      switchMap(() =>
        this.editInfoService.getSkills().pipe(
          tap((data) => {
            this.skills = data;
          })
        )
      ),
      switchMap(() =>
        this.store.select('user').pipe(
          map((user) => user.user),
          tap((user) => {
            this.editForm.patchValue({
              usuNickname: user?.usuNickname,
              usuCorreo: user.usuCorreo,
              genero: user.perfil?.genero,
              fechaNacimiento: user.perfil?.fechaNacimiento,
              pais: user.perfil?.pais?.idPais,
              biografia: user.perfil?.biografia,
              conocimientos: user.perfil?.conocimientos.map(
                (item) => item.idConocimiento
              ),
            });
            this.redesSociales.controls.forEach((ctrl, i) => {
              ctrl.patchValue(user?.perfil?.redesSociales[i]?.usuario || '');
            });
          })
        )
      )
    );
  }

  getRedSocialNombre(id: number) {
    return SocialNames[id];
  }

  openWidget() {
    this.editForm.markAsDirty();
    this.store.dispatch(imageActions.initLoadImg());
    this.widget.open();
  }

  async createForm() {
    return this.fb.group(
      {
        usuNickname: ['', [Validators.required, Validators.minLength(3)]],
        usuCorreo: [
          '',
          [Validators.required, Validators.pattern(emailPattern)],
        ],
        usuClave: [''],
        usuClave2: [''],

        genero: [
          0,
          [Validators.required, Validators.min(0), Validators.max(2)],
        ],
        fechaNacimiento: [''],
        pais: [0],
        biografia: ['', [Validators.maxLength(140)]],
        conocimientos: [[]],
        redesSociales: this.fb.array([
          this.fb.control(''),
          this.fb.control(''),
          this.fb.control(''),
          this.fb.control(''),
          this.fb.control(''),
        ]),
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
    this.processUserEditData();
  }

  getPuntaje() {
    return (
      +this.editForm.get('genero').value > 0 &&
      +this.editForm.get('pais').value > 0 &&
      this.editForm.get('biografia').value.length > 0 &&
      !!this.editForm.get('fechaNacimiento').value &&
      this.editForm.get('conocimientos').value.length > 0
    );
  }

  processUserEditData() {
    zip(this.store.select('user'), this.store.select('image'))
      .pipe(
        map(([user, image]) => {
          const perfil: Profile = new ProfileDetails(
            user.user.perfil.idPerfil,
            +this.editForm.get('genero').value,
            +this.editForm.get('pais').value,
            this.editForm.get('biografia').value,
            this.editForm.get('fechaNacimiento').value,
            this.editForm.get('conocimientos').value,
            this.redesSociales.value,
            this.getPuntaje() ? 1 : 0,
            image.url
          );
          const newData = new EditUsers(
            user.user.usuId,
            this.editForm.get('usuNickname').value,
            this.editForm.get('usuCorreo').value,
            perfil
          );
          this.store.dispatch(usersActions.editUser({ newUser: newData }));
        })
      )
      .subscribe(() => {
        this.router.navigateByUrl('/profile');
      });
  }
}
