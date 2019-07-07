import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import {BaconDirective} from '../shared/bacon.directive';


@Component({
    selector: 'app-home',
    templateUrl: 'app-home.component.html',
    styleUrls: ['app-home.component.scss']
})
export class AppHomeComponent implements OnInit, AfterViewInit {
    listObj = [];
    listDetailsObj = [];
    detailsHeading: boolean = false;

    constructor() {

    }

    ngOnInit() {
        this.sendToChild();
    }

    ngAfterViewInit() {

    }

    sendToChild() {
        this.listObj = [
            {name: 'Amit papney', age: '26', emailId: 'apapnai@gmail.com', gender: 'male'},
            {name: 'Balbir Singh', age: '27', emailId: 'balbir@gmail.com', gender: 'male'},
            {name: 'Ritu Khulbey', age: '24', emailId: 'ritu@gmail.com', gender: 'Female'},
            {name: 'Nitin Bhasin', age: '26', emailId: 'nitin@gmail.com', gender: 'male'},
            {name: 'Yajya Kalra', age: '23', emailId: 'apapnai@gmail.com', gender: 'Female'}
        ];
    }

    listDetails(details) {
        this.listDetailsObj = details;
    }

    showDetails() {
        this.detailsHeading = true;
    }

}
