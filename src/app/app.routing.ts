import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

export const routing: Routes = [
    { path : '', redirectTo: 'login', pathMatch : 'full'},
    { path: 'login', loadChildren : 'app/app-login/app-login.module#AppLoginModule' },
    { path: 'home', loadChildren : 'app/app-home/app-home.module#AppHomeModule' },
    { path: 'about', loadChildren : './app-about/app-about.module#AppAboutModule' },
    { path: 'service', loadChildren: 'app/app-service/app-service.module#AppServiceModule' },
    { path: 'contact', loadChildren: 'app/app-contact/app-contact.module#AppContactModule'},
    { path: 'pages', loadChildren: 'app/pages/pages.module#PagesModule' }
  ];

  export const routes: ModuleWithProviders = RouterModule.forRoot(routing, { useHash: true });

