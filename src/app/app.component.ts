import { Component } from '@angular/core';
import { ServiceHelpers } from './services/service.helpers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'file-manager';
  constructor(private route:ServiceHelpers){
    this.route.to("/start",0)
  }
}
