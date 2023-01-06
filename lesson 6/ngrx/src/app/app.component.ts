import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Actions, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { debounceTime, fromEvent, map, merge } from 'rxjs';
import { increment, loadUsers, loadUsersFailure, loadUsersSuccess, setValue } from './+store/actions';
import { getCounter, getUrl, getUser } from './+store/selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  @ViewChild('emailFilter', {static: true}) emailFilter!: ElementRef<HTMLInputElement>;

  counter$ = this.store.select(getCounter);
  url$ = this.store.select(getUrl);
  users$ = this.store.select(getUser);

  isFetchingUsers$ = merge(
    this.actions$.pipe(
      ofType(loadUsers),
      map(() => true)
      ),
      this.actions$.pipe(
        ofType(loadUsersSuccess),
        map(() => false)
      ),
      this.actions$.pipe(
        ofType(loadUsersFailure),
        map(() => true)
      )
  )
  constructor(private store: Store, private actions$: Actions) {
    this.store.dispatch(loadUsers({filter: ''}));
  }
  ngOnInit(): void {
    fromEvent(this.emailFilter.nativeElement, 'input')
    .pipe(debounceTime(500),
     map(e => (e.target as HTMLInputElement).value)
    )
    .subscribe((filter) => {
      this.store.dispatch(loadUsers({filter}))
    })
  }

  incrementHandler() {
    this.store.dispatch(increment());
  }

  setCounterHandler(newValue: number) {
    this.store.dispatch(setValue({ counter: newValue }));
  }

  reloadHandler(): void{
    this.store.dispatch(loadUsers({filter: this.emailFilter.nativeElement.value || ''}))
  }
}
