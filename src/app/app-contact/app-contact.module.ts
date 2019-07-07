// Angular Imports
import { NgModule } from '@angular/core';

// This Module's Components
import { AppContactComponent } from './app-contact.component';
import {routing } from './app-contact.routing';

@NgModule({
    imports: [
        routing
    ],
    declarations: [
        AppContactComponent,
    ],
    exports: [
        AppContactComponent,
    ]
})
export class AppContactModule {

}
