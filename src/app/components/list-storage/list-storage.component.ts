import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-list-storage',
  templateUrl: './list-storage.component.html',
  styleUrls: ['./list-storage.component.css']
})
export class ListStorageComponent implements OnInit {
  @Input() list:any[] = [];

  constructor() { }

  ngOnInit(): void {
    
  }

}
