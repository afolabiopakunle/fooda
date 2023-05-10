import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthResponseData, AuthService } from '../auth.service';
import { catchError, from, Observable, of, tap } from 'rxjs';
import { HotToastService } from '@ngneat/hot-toast';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {

  isLoginMode = true;
  isLoading = false;
  form!: FormGroup;
  authObs$!: Observable<AuthResponseData>;

  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private toast: HotToastService,
              private router: Router,
  ) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  switchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  submit() {
    if (this.form.invalid) return;
    this.isLoading = true;
    const {email, password} = this.form.value;
    if (!this.isLoginMode) {
      this.authObs$ = this.authService.signUp(email, password);
    } else {
      this.authObs$ = this.authService.login(email, password);
    }

    this.authObs$
      .subscribe({
        next: (response) => {
          this.isLoading = false;
          console.log(response);
          if (this.isLoginMode) {
            this.toast.success('Login Successful');
          } else {
            this.toast.success('Sign-up Successful');
          }
          this.router.navigate(['recipes'])
        },
        error: (error) => {
          switch (error.error.error.message) {
            case 'INVALID_PASSWORD':
              this.toast.error('Invalid password');
              break;
            case 'EMAIL_EXISTS':
              this.toast.error('Email exists');
              break;
            case 'EMAIL_NOT_FOUND':
              this.toast.error('User not found');
              break;
            default : this.toast.error('An unknown error occurred')
          }
          this.isLoading = false;
        },
      });
  }

}
