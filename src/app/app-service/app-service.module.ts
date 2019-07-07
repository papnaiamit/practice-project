// Angular Imports
import { NgModule } from '@angular/core';

// This Module's Components
import { AppServiceComponent } from './app-service.component';
import { routing } from './app-service.routing';
@NgModule({
    imports: [
        routing
    ],
    declarations: [
        AppServiceComponent,
    ],
    exports: [
        AppServiceComponent,
    ]
})
export class AppServiceModule {

}
