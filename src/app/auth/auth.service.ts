import { Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { UserModel } from './user.model';
import { environment } from '../../environments/environment';

export interface AuthResponseData {
  kind: string
  idToken: string
  email: string
  refreshToken: string
  expiresIn: string
  localId: string
  registered?: boolean
}

@Injectable({
  providedIn: 'root'
}) export class AuthService {

  user = new BehaviorSubject<UserModel | null>(null);

  constructor(private http: HttpClient,
              ) {
  }

  signUp(email: string, password: string) {
    return this.http.post<AuthResponseData>(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${environment.firebase.apiKey}`, {email, password, returnSecureToken: true})
      .pipe(tap(resData => this.handleAuthentication(resData)));
  }

  login(email: string, password: string) {
    return this.http.post<AuthResponseData>(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.firebase.apiKey}`, {email, password, returnSecureToken: true})
      .pipe(tap(resData => this.handleAuthentication(resData)));
  }

  handleAuthentication(resData: AuthResponseData) {
      const expirationDate = new Date(new Date().getTime() + (+resData.expiresIn * 1000));
      const user = new UserModel(resData.email, resData.localId, resData.idToken, expirationDate);
      this.user.next(user);
  }

}
