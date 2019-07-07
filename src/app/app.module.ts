import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { routes } from './app.routing';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import {DataService } from './service/data.service';
import { AppComponent } from './app.component';
import { AppHomeModule } from '../app/app-home/app-home.module';
import { AppAboutModule } from '../app/app-about/app-about.module';
import { AppServiceModule } from '../app/app-service/app-service.module';
import { AppContactModule } from '../app/app-contact/app-contact.module';
import {AppHeaderComponent } from './app-header/app-header.component';
import { from } from 'rxjs/observable/from';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent
  ],
  imports: [AppHomeModule,
    AppAboutModule,
    AppServiceModule,
    AppContactModule,
    BrowserModule,
    HttpClientModule,
    RouterModule,
    routes,
    //RouterModule.forRoot(routing)
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: DataService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
