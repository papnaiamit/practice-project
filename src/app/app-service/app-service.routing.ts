import { Routes, RouterModule } from '@angular/router';

import { AppServiceComponent } from './app-service.component';
import { ModuleWithProviders } from '@angular/core';

export const routes: Routes = [
  {
    path: '',
    component: AppServiceComponent,
    children: [ ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
