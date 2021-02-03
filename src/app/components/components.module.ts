import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StartBannerComponent } from './start-banner/start-banner.component';
import {MatButtonModule} from "@angular/material/button";
import { LoadingPageComponent } from './loading-page/loading-page.component';
import { BannerUserComponent } from './banner-user/banner-user.component';


@NgModule({
  declarations: [     
   
  StartBannerComponent, LoadingPageComponent, BannerUserComponent ,
 
],
  imports: [
    BrowserModule ,
    MatButtonModule,
  ],
  exports: [
    
    StartBannerComponent  
  ]  
})
export class ComponentsModule { }
