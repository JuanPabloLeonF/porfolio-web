import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'init',
        data: { animation: 'init' },
        loadComponent: () => import('./pages/init/init.component').then(c => c.InitComponent)
    },
    {
        path: 'about',
        data: { animation: 'about' },
        loadComponent: () => import('./pages/about/about.component').then(c => c.AboutComponent)
    },
    {
        path: 'projects',
        data: { animation: 'projects' },
        loadComponent: () => import('./pages/proyect/proyect.component').then(c => c.ProyectComponent)
    },
    {
        path: 'contact',
        data: { animation: 'contact' },
        loadComponent: () => import('./pages/contact/contact.component').then(c => c.ContactComponent)
    },
    {
        path: '**',
        data: { animation: 'init' },
        redirectTo: 'init',
        pathMatch: 'full'
    }
];
