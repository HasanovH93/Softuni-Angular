import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'lesson3';
  counter = 0;
  users = [
    {
      name : "Ivan"
    },
    {
      name: 'Pesho'
    }

  ]
  constructor(
    @Inject('test') test: string
  ){
    console.log(test)
    // setInterval(()  => {
    //   this.counter++
    // }, 3000)
  }

  addUserHandler(nameInput : HTMLInputElement): void {
    
    const {value : name} = nameInput;
    // this.users.push({name});
    this.users = this.users.concat({ name})
    nameInput.value = '';
  }
}
