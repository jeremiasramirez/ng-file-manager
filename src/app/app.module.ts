import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ROUTING_MAIN } from './routing/main-app.routing';
import { StartPage } from './pages/start/start.page';
@NgModule({
  declarations: [
    AppComponent,
    StartPage
  ],
  imports: [
    BrowserModule,
    ROUTING_MAIN,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
