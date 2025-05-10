import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'cloud',
    loadComponent: () => import('./cloud/cloud.page').then( m => m.CloudPage)
  },
  {
    path: 'abstract',
    loadComponent: () => import('./abstract/abstract.page').then( m => m.AbstractPage)
  },
  {
    path: 'service-page',
    loadComponent: () => import('./service-page/service-page.page').then( m => m.ServicePagePage)
  },
  {
    path: 'lab6',
    loadComponent: () => import('./lab6/lab6.page').then(m => m.Lab6Page)
  }
  
];
