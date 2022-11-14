import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ListComponent,
    DetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'user/list',
        component: ListComponent
    
      },
      {
        path: 'user/detail/:id',
        component: DetailComponent
      },
    ])
  ],
  exports: [
    ListComponent,
    DetailComponent
  ]
})
export class UserModule { }
