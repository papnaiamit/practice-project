import { Routes, RouterModule } from '@angular/router';

import { AppAboutComponent } from './app-about.component';
import { ModuleWithProviders } from '@angular/core';

export const routes: Routes = [
  {
    path: '',
    component: AppAboutComponent,
    children: [ ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
