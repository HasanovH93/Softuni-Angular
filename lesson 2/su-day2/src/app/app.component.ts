import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'su-day2';

  changeTitleHandler(newTitle: string){
    this.title = newTitle
  }
}
