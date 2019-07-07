import { Routes, RouterModule } from '@angular/router';

import { AppLoginComponent } from './app-login.component';
import { ModuleWithProviders } from '@angular/core';

export const routes: Routes = [
  {
    path: '',
    component: AppLoginComponent,
    children: [ ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
