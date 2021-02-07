import { Component } from '@angular/core';
// import { ServiceHelpers } from 'src/app/services/service.helpers';
import { ListFolders } from 'src/app/services/service.list-storage';

@Component({
    selector: 'files-page',
    templateUrl: './files.page.html',
    styleUrls: [
        './files.page.css'
    ]
})


export class FilesPage{

    public fileListBand: any[] =[];

    constructor(private fileList:ListFolders){ }

    ngOnInit():void{
        this.fileListBand = this.fileList.list();
    }
 

} 