import { Component, OnInit } from '@angular/core';
import { ICustomEvent } from '../list-item/list-item.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {

  users = [
    {
      firstName: 'Ivan',
      lastName: 'Ivanov',
    },
    {
      firstName: 'Hasan',
      lastName: 'Hasanov',
    },
  ];

  selectedUserIndex: null | number = null;

  showLastName = true;



  constructor() {}

  handleClickEvent(event: MouseEvent){
    console.log(event)
   this.showLastName = !this.showLastName;
  }

  showSelectedIndex(): boolean {
    return (this.selectedUserIndex === null ?  -1 : this.selectedUserIndex)  >= 0
  }

  listItemClickHandler(index : number){
    if(this.selectedUserIndex == index){
      this.selectedUserIndex = null;
      return;
    }
    this.selectedUserIndex = index
  }

  customEventHandler($event : ICustomEvent) {
    console.log($event)
  }

  ngOnInit(): void {}
}
