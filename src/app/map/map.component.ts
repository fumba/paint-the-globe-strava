import { Component, OnInit } from '@angular/core';
declare let require: any;

@Component({
    selector: 'map',
    templateUrl: './map.component.html',
    styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

    private strava: any;

    constructor() {
        this.strava = require('strava-v3');
    }

    ngOnInit(): void {
        this.strava.athlete.get({}, (err: any, payload: any, limits: any) => {
            if (!err) {
                console.log(payload);
            }
            else {
                console.log(err);
            }
        });

    }
}
