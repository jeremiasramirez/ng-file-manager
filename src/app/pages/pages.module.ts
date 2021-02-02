import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ROUTING_MAIN } from '../routing/start-app.routing';
import { MainPage } from './main/main.page';
import { StartPage } from './start/start.page';
 

@NgModule({
  declarations: [
    
    StartPage,
    MainPage
    
  ],
  imports: [
    BrowserModule,
    ROUTING_MAIN
  ]
})
export class PageModule { }
