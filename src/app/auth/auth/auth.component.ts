import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { catchError, from, of, tap } from 'rxjs';
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
      this.authService.signUp(email, password)
        .subscribe({
          next: (response) => {
            this.isLoading = false;
            console.log(response);
            this.toast.success('User verified')
          },
          error: (error) => {
            this.isLoading = false;
            console.log(error.error.error.message);
            switch (error.error.error.message) {
              case 'EMAIL_EXISTS': {
                this.toast.error('Email exists')
              }
            }
          }
        })
    } else {
     this.authService.login(email, password)
       .subscribe({
         next: (response) => {
           this.isLoading = false;
           this.toast.success('Login Successful');
         },
         error: (error) => {
           switch (error.error.error.message) {
             case 'INVALID_PASSWORD': {
               this.toast.error('Invalid password')
             }
           }
           this.isLoading = false;
         }
       })
    }
  }

}
