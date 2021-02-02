import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StartBannerComponent } from './start-banner/start-banner.component';
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [     
   
  StartBannerComponent,
  // MatButtonModule

],
  imports: [
    BrowserModule 
  ],
  exports: [
    StartBannerComponent ,
    // MatButtonModule
  ]  
})
export class ComponentsModule { }
