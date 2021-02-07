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

    list() :any[]{
        return [
            {
                name: 'My favorite',
                created: 'Created 03/2020',
                image: '../../../assets/images/star.svg'
            },
            {
                name: 'Portfolio',
                created: 'Created 08/2021',
                image: '../../../assets/images/loading.svg'
            },
            {
                name: 'Photos',
                created: 'Created 03/2020',
                image: '../../../assets/images/image.svg'
            },
            {
                name: 'My Music',
                created: 'Created 03/2021',
                image: '../../../assets/images/music.svg'
            }
        ]
    }
 

    
}