import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword } from '@angular/fire/auth';

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
  signUp(email: string, password: string) {
    return createUserWithEmailAndPassword(this.auth, email, password)
  }
}
