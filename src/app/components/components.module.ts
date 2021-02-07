import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StartBannerComponent } from './start-banner/start-banner.component';
import {MatButtonModule} from "@angular/material/button";
import { LoadingPageComponent } from './loading-page/loading-page.component';
import { BannerUserComponent } from './banner-user/banner-user.component';
import { IconComponent } from './icon/icon.component';
import { ListStorageComponent } from './list-storage/list-storage.component';
import {MatRippleModule} from '@angular/material/core';
 

@NgModule({
  declarations: [     
   
  StartBannerComponent,
  LoadingPageComponent,
  BannerUserComponent,
  IconComponent,
  ListStorageComponent,
 
  
 
],
  imports: [
    BrowserModule ,
    MatButtonModule,
    MatRippleModule
  ],
  exports: [
    
    StartBannerComponent,
    LoadingPageComponent,
    BannerUserComponent,
    IconComponent ,
    ListStorageComponent 
  ]  
})
export class ComponentsModule { }
