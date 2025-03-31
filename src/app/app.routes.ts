import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'init',
        loadComponent: () => import('./pages/init/init.component').then(c => c.InitComponent)
    },
    {
        path: 'about',
        loadComponent: () => import('./pages/about/about.component').then(c => c.AboutComponent)
    },
    {
        path: 'projects',
        loadComponent: () => import('./pages/proyect/proyect.component').then(c => c.ProyectComponent)
    },
    {
        path: 'contact',
        loadComponent: () => import('./pages/contact/contact.component').then(c => c.ContactComponent)
    },
    {
        path: '**',
        redirectTo: 'init',
        pathMatch: 'full'
    }
];
