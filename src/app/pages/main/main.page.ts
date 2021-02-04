import { Component } from '@angular/core';
import { ListStorage } from 'src/app/services/service.list-storage';

@Component({
    selector: 'main-page',
    templateUrl: './main.page.html',
    styleUrls: [
        './main.page.css'
    ]
})


export class MainPage{
    
    constructor(private storageList:ListStorage){}

} 