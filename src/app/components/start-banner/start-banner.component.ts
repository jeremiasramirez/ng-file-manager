import { Component, OnInit } from '@angular/core';
import { ServiceHelpers } from 'src/app/services/service.helpers';

@Component({
  selector: 'app-start-banner',
  templateUrl: './start-banner.component.html',
  styleUrls: ['./start-banner.component.css']
})
export class StartBannerComponent implements OnInit {

  constructor(private helper:ServiceHelpers) {

   }

  ngOnInit(): void {
  }

  toMain() : void{
    this.helper.to("/main");
  }

}
