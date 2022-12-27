import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { UserService } from '../user.service';
import { loadUsers, loadUsersFailure, loadUsersSuccess } from './actions';
import { catchError, map, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Effects {
  loadUsers = createEffect(() =>this.actions$.pipe(
      ofType(loadUsers),
      switchMap(() => this.userService.loadUsers().pipe(
            map((users) => loadUsersSuccess({ users })),
            catchError(errors => [loadUsersFailure({errors})])
            ))
        ));
  constructor(private userService: UserService, private actions$: Actions) {}
}
