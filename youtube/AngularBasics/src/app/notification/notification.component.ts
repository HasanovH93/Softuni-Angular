import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification',
  template: `<div class="alert alert-success" [hidden]="displayNotification">
    <p>This website uses cookies to provide better user experience</p>
    </div>`,
  styles: ["p{font-size: 14px}"]
})
export class NotificationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  displayNotification: boolean = false;

}
