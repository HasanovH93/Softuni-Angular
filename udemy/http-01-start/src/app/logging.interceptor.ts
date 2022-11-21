import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpInterceptor
} from '@angular/common/http';

@Injectable()
export class LoggingInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    console.log('OutGoing request');
    console.log(request.url)
    return next.handle(request);
  }
}
