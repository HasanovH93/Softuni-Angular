import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpInterceptor,HttpEventType } from '@angular/common/http';
import { tap } from 'rxjs/operators'

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
 
  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler) {

    console.log('request is on its way');
    console.log(request.url)
    const modifiedRequest = request.clone({headers: request.headers.append('Auth', 'xyz')})
    return next.handle(modifiedRequest)
  }
}
