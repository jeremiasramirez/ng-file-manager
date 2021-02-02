import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ComponentsModule } from '../components/components.module';
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
    ROUTING_MAIN,  
    ComponentsModule,
  ],
  exports: [
    StartPage,
    MainPage,
    ROUTING_MAIN,  
    ComponentsModule,
  ]

})
export class PageModule { }
