import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';

const routes: Routes = [
  {
   path: '',
   component: PagesComponent,
   children : [
       {
           path : 'dashboard', loadChildren : 'app/pages/dashboard/dashboard.module#DashboardModule'
       },
       {
        path : 'list', loadChildren : 'app/pages/list-view/list-view.module#ListViewModule'
       }
   ]

    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
