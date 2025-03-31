import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'init',
        loadComponent: () => import('./pages/init/init.component').then(c => c.InitComponent)
    },{
        path: '**',
        redirectTo: 'init',
        pathMatch: 'full'
    }
];
