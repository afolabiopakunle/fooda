import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  isLoginMode = true;
  form!: FormGroup;

  constructor(private fb: FormBuilder,
              private authService: AuthService,
              ) {
  }
  ngOnInit() {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    })
  }

  switchMode() {
    this.isLoginMode = !this.isLoginMode;
  }
  submit() {
    console.log(this.form.value);
    const { email, password } = this.form.value;
    if(!this.isLoginMode) {
      from(this.authService.signUp(email, password))
        .subscribe(response => {
          console.log(response);
        })
    }
  }

}
