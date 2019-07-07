import { Component, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
    selector: 'app-order-details',
    templateUrl: 'app-order-details.component.html',
    styleUrls: ['app-order-details.component.scss']
})
export class AppOrderDetailsComponent implements OnInit {

    outputData = [
        {
            title : 'Heading 1',
            detail : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'
        },
        {
            title : 'Heading 2',
            detail : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'
        }
    ];

    @Output() peopleDetails = new EventEmitter();

    constructor() {

    }

    ngOnInit() {
       this.peopleDetails.emit(this.outputData);
    }

}
