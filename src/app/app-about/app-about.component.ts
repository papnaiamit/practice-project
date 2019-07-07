import { Component, OnInit } from '@angular/core';
import {urls} from '../const/urls';
import {params} from '../const/params';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-about',
    templateUrl: 'app-about.component.html',
    styleUrls: ['app-about.component.scss']
})
export class AppAboutComponent {
    constructor(private http: HttpClient  ){

    }

    ngOnInit(){
        this.getAPIUse();
    }

    getAPIUse() {
        this.http.get(urls.DUMMY_URL.GET).subscribe(data => {
        console.log(data);
    });
  }
}

