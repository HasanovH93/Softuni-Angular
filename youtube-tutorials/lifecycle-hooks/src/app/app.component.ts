import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lifecycle-hooks';

  inputText: string = "";

  OnSubmit(inputElement: HTMLInputElement) {
    this.inputText = inputElement.value
  }
}
