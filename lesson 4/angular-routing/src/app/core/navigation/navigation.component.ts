import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
//private router: Router// -- constructor parameters
  constructor() { }

  ngOnInit(): void {
  }

  // userListClickHandler(path: string): void {
  //   this.router.navigate([path])
  // }

}
