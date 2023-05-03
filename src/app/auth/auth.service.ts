import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword } from '@angular/fire/auth';
import { from } from 'rxjs';

export interface AuthResponse {
  kind: string
  idToken: string
  email: string
  refreshToken: string
  expiresIn: string
  localId: string
}

@Injectable({
  providedIn: 'root'
}) export class AuthService {

  constructor(private auth: Auth) {
  }

  signUp<AuthResponse>(email: string, password: string) {
    return from(createUserWithEmailAndPassword(this.auth, email, password))
  }
}
