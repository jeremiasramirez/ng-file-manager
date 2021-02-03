import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component'; 
// import { ComponentsModule } from './components/components.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from "@angular/material/button"; 
import { ROUTING_MAIN } from './routing/start-app.routing';
import { PageModule } from './pages/pages.module';
import { ServiceHelpers } from './services/service.helpers';
 
@NgModule({
  declarations: [
    
    AppComponent ,
   
  ],
  imports: [
    MatButtonModule,
    BrowserModule,
    PageModule ,
    ROUTING_MAIN,  
    BrowserAnimationsModule
  ],
  providers: [
    ServiceHelpers
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
