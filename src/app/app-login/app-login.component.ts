import { Component, OnInit } from '@angular/core';
import {observable} from './loginobj';
import { DataService} from '../service/data.service';

@Component({
    moduleId: module.id,
    selector: 'app-login',
    templateUrl: 'app-login.component.html',
    styleUrls: ['app-login.component.scss']
})
export class AppLoginComponent implements OnInit {
    constructor(public _dataService: DataService ) {

    }

    ngOnInit() {


    }
    login() {
        observable.subscribe((data) => {
            const userId = data.data.session.userData.userId;
            const sapId = data.data.session.userData.sapId;
            this._dataService.setCookies('userId', userId);
            this._dataService.setCookies('sapId', sapId);
        });
    }


}
