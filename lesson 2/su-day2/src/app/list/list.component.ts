import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  myProp = 'Hello World!';

  constructor() {
    setTimeout(() => {
      this.myProp = 'Hello OtherWorld!';
    }, 1000);
  }

  ngOnInit(): void {}
}
