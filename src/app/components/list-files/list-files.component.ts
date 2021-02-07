import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-list-files',
  templateUrl: './list-files.component.html',
  styleUrls: ['./list-files.component.css']
})
export class ListFilesComponent implements OnInit {
  @Input() listFileLists :any[] = [];

  constructor() { }

  ngOnInit(): void { 
    console.log(this.listFileLists)
  }

}
