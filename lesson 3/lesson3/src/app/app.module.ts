import { NgModule, Provider } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';

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
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
   myProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
