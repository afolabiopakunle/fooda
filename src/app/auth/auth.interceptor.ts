import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpParams,
} from '@angular/common/http';
import { exhaustMap, Observable, take } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  token: any;
  constructor(private authService: AuthService,
              ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
     return this.authService.user.pipe(
       take(1),
       exhaustMap(user => {
         this.token = user?.token
         if(!user) {
           return next.handle(request);
         }
         const modifiedReq = request.clone({
           params: new HttpParams().set('auth', this.token)
         })
         return next.handle(modifiedReq);
       })
     )
  }
}
