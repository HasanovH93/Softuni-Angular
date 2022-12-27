import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { increment } from './+store/actions';
import { getCounter } from './+store/selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  counter$ = this.store.select(getCounter);
  constructor(private store: Store) {}

  incrementHandler() {
    this.store.dispatch(increment())
  }
}

