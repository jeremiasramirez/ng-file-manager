import { Routes, RouterModule} from '@angular/router';
import { StartPage } from '../pages/start/start.page';


const ROUTES :Routes= [

    {path: 'start', component: StartPage},
    {path: '', component: StartPage},
    {path: '**', component: StartPage}
]

export const ROUTING_MAIN:any = RouterModule.forRoot(ROUTES)