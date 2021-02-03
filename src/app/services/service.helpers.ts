import {Injectable} from "@angular/core";
import { Router } from "@angular/router";
import { timer } from "rxjs";


@Injectable()

export class ServiceHelpers{
    constructor(private router:Router){
        console.log("helpers")
    }


    
    to(route:String, time:number=100) : void{
        
        timer(time).subscribe(()=>{
            this.router.navigate([route]);
        })

    }

 
}