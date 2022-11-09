import { NgModule, Provider } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserService } from './user.service';

const myProvider : Provider = {
  useClass: class {
      constructor(){
      console.log('Nameless class was constructed')
      }
  },
  provide: 'test'
}

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent
    // TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    UserService,
  //  myProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
