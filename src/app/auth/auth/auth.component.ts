import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { from, tap } from 'rxjs';
import { HotToastService } from '@ngneat/hot-toast';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  isLoginMode = true;
  isLoading = false;
  form!: FormGroup;

  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private toast: HotToastService,
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
    if(this.form.invalid) return
    this.isLoading = true;
    const { email, password } = this.form.value;
    if(!this.isLoginMode) {
      from(this.authService.signUp(email, password))
        .pipe(
          tap((response: any) => {
            console.log('tap', response);
            this.toast.observe({
              success: 'User Created',
              error: response?.error.errors.message,
              loading: 'Loading...'
            })
          })
        )
        .subscribe({
          next: (response) => {
            this.isLoading = false;
          },
          error: (error) => {
            this.toast.error(error.message)
            this.isLoading = false;
          }
        })
    }
  }

}
