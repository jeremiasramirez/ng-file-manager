import { Component, OnInit,Input } from '@angular/core';
import { ServiceHelpers } from 'src/app/services/service.helpers';

@Component({
  selector: 'app-list-storage',
  templateUrl: './list-storage.component.html',
  styleUrls: ['./list-storage.component.css']
})
export class ListStorageComponent implements OnInit {
  @Input() list:any[] = [];

  constructor(private route:ServiceHelpers) { }

  ngOnInit(): void { }

  toFolder():void{
    this.route.to("/main/files");
  }



}
