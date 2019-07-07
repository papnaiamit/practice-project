// Angular Imports
import { NgModule } from '@angular/core';

// This Module's Components
import { AppLoginComponent } from './app-login.component';
import {routing } from './app-login.routing';
import {DataService} from '../service/data.service';

@NgModule({
    imports: [
        routing
    ],
    declarations: [
        AppLoginComponent,
    ],
    providers:
    [ DataService
    ],
    exports: [
        AppLoginComponent,
    ]
})
export class AppLoginModule {

}
