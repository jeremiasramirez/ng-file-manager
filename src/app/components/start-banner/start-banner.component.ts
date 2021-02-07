import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';
import { ServiceHelpers } from 'src/app/services/service.helpers';

@Component({
  selector: 'app-start-banner',
  templateUrl: './start-banner.component.html',
  styleUrls: ['./start-banner.component.css']
})
export class StartBannerComponent implements OnInit {
  public isLoading : boolean = false;

  constructor(private helper:ServiceHelpers) {

  }

  ngOnInit(): void {
  }

  toMain() : void{
    
    timer(300).subscribe(()=>{
      this.helper.to("/main",1600);
      this.addTimerForLoading(1600)
    });
    
  }
  addTimerForLoading(time:number=100): void{
    this.isLoading=true;

    timer(time).subscribe(()=>{
      this.isLoading=false; 
    })
}

}
