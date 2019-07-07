import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
    // moduleId: module.id,
    selector: 'order-list',
    templateUrl: './order-list.component.html',
    styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {
    dataList = [];
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
    @Input() peopleData;

    @Output() peopleDetails = new EventEmitter();

    constructor() {

    }

    ngOnInit() {
       this.dataList = this.peopleData;
       this.peopleDetails.emit(this.outputData);
    }

}
