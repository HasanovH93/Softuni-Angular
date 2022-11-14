import { Component, OnInit } from '@angular/core';
import { GlobalLoaderService } from 'src/app/core/services/global-loader.service';
import { IUser } from 'src/interfaces';
import { UserService } from '../user.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  userList: IUser[] | null = null

  constructor(
    private userService: UserService,
    private globalLoader: GlobalLoaderService
      ) { }

  ngOnInit(): void {
    this.globalLoader.showLoader('Loading Users');
    this.userService.loadUsers().subscribe({
      next:(userList) => {
        this.globalLoader.hideLoader()
        this.userList = userList
      }
    })
  }

}
