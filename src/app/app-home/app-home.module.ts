// Angular Imports
import { NgModule } from '@angular/core';

// This Module's Components
import { AppHomeComponent } from './app-home.component';
import { routing} from './app-home.routing';
import {AppOrderDetailsComponent} from './app-order-details/app-order-details.component'; 
import {OrderListComponent } from './order-list/order-list.component';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        CommonModule,
        routing
    ],
    declarations: [
        AppHomeComponent,
        AppOrderDetailsComponent,
        OrderListComponent
    ],
    exports: [
        AppHomeComponent,
    ]
})
export class AppHomeModule {

}
