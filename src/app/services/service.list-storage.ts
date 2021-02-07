import {Injectable} from "@angular/core";
 

@Injectable()

export class ListStorage{

 
 constructor(){
     
 }


 list(): any[] {
    return [
        {name: 'Local', percentage: '98%', img: "../../../assets/images/folder.svg"},
        {name: 'iCloud', percentage: '64%', img: "../../../assets/images/icloud.svg"},
        {name: 'Google Drive', percentage: '46%', img: "../../../assets/images/google-drive.svg"},
        {name: 'Dropbox', percentage: '80%', img:"../../../assets/images/dropbox.svg"},
        {name: 'Mega', percentage: '10%', img: "../../../assets/images/mega.svg"}
        
    ];
}

}

export class ListFolders{

    constructor(){
       
    }
 

    
}