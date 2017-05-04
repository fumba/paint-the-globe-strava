import { Component, OnInit } from '@angular/core';
declare var require: any;

@Component({
    selector: 'map',
    templateUrl: './map.component.html',
    styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {


    ngOnInit(): void {
        var strava = require('strava-v3');
        console.log(strava);
    }
}
