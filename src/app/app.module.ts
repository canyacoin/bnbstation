import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { AppRoutingModule } from './app-routing/app-routing.module';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { EmojiModule } from 'angular-emoji/dist';


import * as $ from "jquery";

import { AppComponent } from './app.component';
import { MainnetComponent } from './mainnet/mainnet.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { TopComponent } from './top/top.component';
import { TestnetComponent } from './testnet/testnet.component';
import { BnbComponent } from './bnb/bnb.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgbModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    EmojiModule
  ],
  declarations: [
    AppComponent,
    MainnetComponent,
    TopComponent,
    TestnetComponent,
    BnbComponent,
    FooterComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
