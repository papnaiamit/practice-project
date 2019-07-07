import { Routes, RouterModule } from '@angular/router';

import { AppHomeComponent } from './app-home.component';
import { ModuleWithProviders } from '@angular/core';

export const routes: Routes = [
  {
    path: '',
    component: AppHomeComponent,
    children: [ ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
