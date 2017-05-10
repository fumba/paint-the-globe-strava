import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Config } from "../core/app.config";

declare let require: any;
declare let process: any;

@Component({
    selector: 'map',
    templateUrl: './map.component.html',
    styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

    private strava_api: any;
    private code: String;
    private access_token: String;

    constructor(private activatedRoute: ActivatedRoute, private config: Config) {
        this.strava_api = require('strava-v3');
    }

    ngOnInit(): void {
        process.env.STRAVA_ACCESS_TOKEN = this.config.get("access_token");
        process.env.STRAVA_CLIENT_SECRET = this.config.get("client_secret");
        process.env.STRAVA_CLIENT_ID = this.config.get("client_id");
        process.env.STRAVA_REDIRECT_URI = this.config.get("redirect_uri");

        // subscribe to router event and capture code value
        this.activatedRoute
            .queryParams
            .subscribe(params => {
                this.code = params['code'];
            });


        this.strava_api.oauth.getToken(this.code, (err: any, payload: any, limits: any) => {
            if (!err) {
                console.log(payload);
                this.access_token = payload.access_token;
            }
            else {
                console.log(err);
            }
        });

    }
}
