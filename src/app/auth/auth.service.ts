import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from '@angular/fire/auth';
import { from, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

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

  constructor(private http: HttpClient,
              ) {
  }

  signUp(email: string, password: string) {
    return this.http.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAVZHagnPk4smg0zWRgHoLzmbAiBK_gEvE', {email, password, returnSecureToken: true})
  }

  login(email: string, password: string) {
    return this.http.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAVZHagnPk4smg0zWRgHoLzmbAiBK_gEvE', {email, password, returnSecureToken: true})
  }
}
