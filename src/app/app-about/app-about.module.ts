// Angular Imports
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
// This Module's Components
import { AppAboutComponent } from './app-about.component';
import {routing } from './app-about.routing';

@NgModule({
    imports: [
        routing
    ],
    declarations: [
        AppAboutComponent,
    ],
    exports: [
        AppAboutComponent,
    ]
})
export class AppAboutModule {
    constructor() {
        console.log('called');
    }
}


