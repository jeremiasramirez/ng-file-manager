import { Routes, RouterModule} from '@angular/router';
import { FilesPage } from '../pages/files/files.page';
import { MainPage } from '../pages/main/main.page';
import { StartPage } from '../pages/start/start.page';


const ROUTES :Routes= [

    {path: 'start', component: StartPage},
    {path: 'main', component: MainPage},
    {path: 'main/files', component: FilesPage},
    {path: '', component: StartPage},
    {path: '**', component: StartPage}
]

export const ROUTING_MAIN:any = RouterModule.forRoot(ROUTES)