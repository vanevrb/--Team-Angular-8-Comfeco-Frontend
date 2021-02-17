import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { emailPattern } from '../../helpers/emailPattern';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss'],
})
export class PasswordComponent implements OnInit {
  forgot: FormGroup;

  get emailErrors() {
    const field = this.forgot.get('usuCorreo');
    return field.touched && field.errors;
  }

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.forgot = this.createForm();
  }

  ngOnInit(): void {}

  createForm() {
    return this.fb.group({
      usuCorreo: ['', [Validators.required, Validators.pattern(emailPattern)]],
    });
  }

  onSubmit() {
    if (this.forgot.pristine || this.forgot.invalid) {
      this.forgot.markAllAsTouched();
      return;
    }
    this.authService
      .forgotPassword(this.forgot.get('usuCorreo').value)
      .subscribe((data) => {
        console.log(data);
      });
    this.forgot.reset();
  }
}
