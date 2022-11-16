import { Component, OnInit } from '@angular/core';
import { AccountService } from './accoint.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private accService: AccountService){}
  accounts: {name: string, status: string}[] = []

  ngOnInit(): void {
   this.accounts = this.accService.accounts;
  }
  
}
