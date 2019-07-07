// Angular Imports
import { NgModule } from '@angular/core';

// This Module's Components
import { PagesComponent } from './pages.component';
import {routing} from './pages.routing';

@NgModule({
    imports: [
        routing
    ],
    declarations: [
        PagesComponent,
    ],
    exports: [
        PagesComponent,
    ]
})
export class PagesModule {}
