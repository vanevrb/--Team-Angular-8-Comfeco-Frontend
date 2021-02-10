import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { emailPattern } from '../../helpers/emailPattern';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  register: FormGroup;

  constructor(private fb: FormBuilder) {
    this.register = this.createForm();
  }

  ngOnInit(): void {}

  createForm() {
    return this.fb.group({
      nick: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.pattern(emailPattern)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit() {
    this.register.reset();
  }
}
