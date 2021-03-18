import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormArray,
  FormControl,
} from '@angular/forms';
import { Router } from '@angular/router';

import { Store } from '@ngrx/store';
import { AppStateWithUsers } from '../../../store/reducers/index';

import { Observable, forkJoin, from } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';

import { MyValidatorsService } from '../../../core/services/my-validators.service';
import { AlertService } from '../../../core/services/alert.service';
import { emailPattern } from '../../../core/helpers/emailPattern';
import { EditInfoService } from '../../../core/services/edit-info.service';

import {
  UsersInfoResponse,
  RedesSociales,
  Paises,
  Conocimientos,
  Profile,
  RedesSocialesResponse,
} from '../../../core/interfaces';

import { ProfileDetails } from '../../../core/models/ProfileDetails';
import { EditUsers } from '../../../core/models/EditUsers';

import { Knowledge } from '../../../core/enums/Knowledge';
import { SocialNames } from '../../../core/enums/SocialNames';

import { CloudinaryService } from '../../../core/services/cloudinary.service';

@Component({
  selector: 'app-edition',
  templateUrl: './edition.component.html',
  styleUrls: ['./edition.component.scss'],
})
export class EditionComponent implements OnInit, AfterViewInit, OnDestroy {
  editForm: FormGroup;
  isLoading = true;
  renderPaises: any;
  renderConoc: any;
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

  currUser$: Observable<Partial<UsersInfoResponse>>;

  paises$: Paises[];
  skills$: Conocimientos[];

  constructor(
    private fb: FormBuilder,
    private myValidators: MyValidatorsService,
    private editInfoService: EditInfoService,
    private router: Router,
    private swal: AlertService,
    private cloudinaryService: CloudinaryService,
    private store: Store<AppStateWithUsers>
  ) {
    this.widget = this.cloudinaryService.myWidget;
  }

  ngOnDestroy() {}

  ngAfterViewInit() {}
  // this.editInfoService.getSkills();
  ngOnInit(): void {
    this.currUser$ = from(this.createForm()).pipe(
      tap((data) => {
        this.editForm = data;
      }),
      switchMap(() =>
        this.editInfoService.getCountries().pipe(
          tap((data) => {
            this.paises$ = data;
          })
        )
      ),
      switchMap(() =>
        this.editInfoService.getSkills().pipe(
          tap((data) => {
            this.skills$ = data;
          })
        )
      ),
      switchMap(() =>
        this.store.select('user').pipe(
          map((user) => user.user),
          tap((user) => {
            this.editForm.patchValue({
              usuNickname: user.usuNickname,
              usuCorreo: user.usuCorreo,
            });
          })
        )
      )
    );

    // map((fork) => {
    //   this.paises$ = fork.paises$;
    //   this.paises$ = fork.paises$;
    //   this.paises$ = fork.paises$;
    // })

    // zip(
    //   this.editInfoService.getCountries(),
    //   this.editInfoService.getSkills(),
    //   this.editInfoService.getSocials()
    // )
    //   .pipe(
    //     map(([pais, conocimientos, redesSociales]) => ({
    //       pais,
    //       conocimientos,
    //       redesSociales,
    //     }))
    //   )
    //   .toPromise()
    //   .then((data) => {
    //     this.renderPaises = data.pais;
    //     this.renderConoc = data.conocimientos;
    //     this.editForm = this.createForm();
    //     data.redesSociales.forEach((item) => {
    //       const valControl = this.currUser.perfil.redesSociales.find(
    //         (red) => red.redSocial.idRedSocial === item.idRedSocial
    //       );

    //       this.redesSociales.push(
    //         this.fb.control(!valControl ? '' : valControl.usuario)
    //       );
    //     });
    //     this.isLoading = false;
    //   });
  }

  getRedSocialNombre(id: number) {
    return SocialNames[id];
  }

  openWidget() {
    this.editForm.markAsDirty();

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

    this.swal.sendForm();
    this.processUserEditData();
  }

  processUserEditData() {
    this.cloudinaryService.url$
      .pipe
      // switchMap((imgUrl) => {
      //   console.log(imgUrl);
      //   const perfil: Profile = new ProfileDetails(
      //     this.currUser.perfil.idPerfil,
      //     +this.editForm.get('genero').value,
      //     +this.editForm.get('pais').value,
      //     this.editForm.get('biografia').value,
      //     this.editForm.get('fechaNacimiento').value,
      //     this.editForm.get('conocimientos').value,
      //     this.redesSociales.value,
      //     imgUrl
      //   );

      //   const newData = new EditUsers(
      //     this.currUser.usuId,
      //     this.editForm.get('usuNickname').value,
      //     this.editForm.get('usuCorreo').value,
      //     perfil
      //   );

      //   // return this.editInfoService.editUserInfo(
      //   //   newData,
      //   //   // this.userService.accessToken
      //   // );
      // }),
      // switchMap((response) => {
      //   return this.editInfoService.getUserInfo();
      // })
      ()
      .subscribe((resp) => {
        // this.userService.user = resp.message;
        // this.currUser = this.userService.user;
        this.swal.successSwal('Su información fue actualizada');
        this.router.navigate(['profile']);
        console.log(resp);
      });
  }
}
