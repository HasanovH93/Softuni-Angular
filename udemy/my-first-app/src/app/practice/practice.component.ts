import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css']
})
export class PracticeComponent implements OnInit {
  
  username = ""
  showSecret = false
  logs = []
  constructor() { }

  ngOnInit(): void {
  }

  onReset(){
   this.username = ''
  }

  onToggleDisplay(){
    this.showSecret = !this.showSecret
    // this.logs.push(this.logs.length + 1)
    this.logs.push(new Date)
  }

}
