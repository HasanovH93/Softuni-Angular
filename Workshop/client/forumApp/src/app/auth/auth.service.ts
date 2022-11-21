import { Injectable } from '@angular/core';
import { IUsser } from '../interfaces/IUsser';
import { IUser } from '../interfaces/users';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: IUsser | null = null;

  get isLoggedIn() {
    return this.user !== null;
  }

  constructor() { }
}
