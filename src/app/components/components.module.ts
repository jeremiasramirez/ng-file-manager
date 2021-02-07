import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StartBannerComponent } from './start-banner/start-banner.component';
import {MatButtonModule} from "@angular/material/button";
import { LoadingPageComponent } from './loading-page/loading-page.component';
import { BannerUserComponent } from './banner-user/banner-user.component';
import { IconComponent } from './icon/icon.component';
import { ListStorageComponent } from './list-storage/list-storage.component';
import {MatRippleModule} from '@angular/material/core';
import { BannerFilesComponent } from './banner-files/banner-files.component';
import { ListFilesComponent } from './list-files/list-files.component';
import { ListFolders } from '../services/service.list-storage';
 

@NgModule({
  declarations: [     
   
  StartBannerComponent,
  LoadingPageComponent,
  BannerUserComponent,
  IconComponent,
  ListStorageComponent,
  BannerFilesComponent,
  ListFilesComponent,
  
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
    ListStorageComponent,
    BannerFilesComponent,
    ListFilesComponent 
  ],
  providers: [
    ListFolders
  ]  
})
export class ComponentsModule { }
