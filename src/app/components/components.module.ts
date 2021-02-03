import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StartBannerComponent } from './start-banner/start-banner.component';
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [     
   
  StartBannerComponent ,
 
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
