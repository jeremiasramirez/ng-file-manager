import {Injectable} from "@angular/core";
 

@Injectable()

export class ListStorage{

 
 constructor(){
     console.log("list storage")
 }


 list(): any[] {
    return [
        {name: 'iCloud', percentage: '64%'},
        {name: 'Google Drive', percentage: '46%'},
        {name: 'Dropbox', percentage: '80%'},
        {name: 'Mega', percentage: '10%'}
    ];
}

}

export class ListFolders{

    constructor(){
        console.log("list folder")
    }
 

    
}