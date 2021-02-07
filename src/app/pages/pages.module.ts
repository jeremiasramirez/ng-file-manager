import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { BannerFilesComponent } from '../components/banner-files/banner-files.component';
import { ComponentsModule } from '../components/components.module'; 
import { ROUTING_MAIN } from '../routing/start-app.routing';
import { ListStorage } from '../services/service.list-storage';
import { MainPage } from './main/main.page';
import { StartPage } from './start/start.page';
 

@NgModule({
  declarations: [
    
    StartPage,
    MainPage , 
    
  ],
  imports: [
    BrowserModule,
    ROUTING_MAIN,  
    ComponentsModule 
  ],
  exports: [
    StartPage,
    MainPage, 
    ROUTING_MAIN,  
    ComponentsModule 
  ],
  providers: [
    ListStorage
  ]

})
export class PageModule { }
