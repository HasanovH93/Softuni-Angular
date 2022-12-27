import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http'

import {reducers} from './+store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component'
import { CustomSerializer } from './+store/router';
import { EffectsModule } from '@ngrx/effects';
import { Effects } from './+store/effects';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(reducers),
    StoreRouterConnectingModule.forRoot({serializer: CustomSerializer}),
    StoreDevtoolsModule.instrument({  logOnly: environment.production }),
    EffectsModule.forRoot([Effects]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
