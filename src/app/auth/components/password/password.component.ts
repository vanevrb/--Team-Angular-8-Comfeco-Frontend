import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { emailPattern } from '../../helpers/emailPattern';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss'],
})
export class PasswordComponent implements OnInit {
  forgot: FormGroup;

  constructor(private fb: FormBuilder) {
    this.forgot = this.createForm();
  }

  ngOnInit(): void {}

  createForm() {
    return this.fb.group({
      email: ['', [Validators.required, Validators.pattern(emailPattern)]],
    });
  }

  onSubmit() {
    this.forgot.reset();
  }
}
