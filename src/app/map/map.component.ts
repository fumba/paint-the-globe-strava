import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Config } from "../core/app.config";

import { ActivityService } from '../shared/activity.service';
import { StravaActivity } from '../strava_lib/strava.activity';
import { isDevMode } from '@angular/core';

@Component({
    selector: 'map',
    templateUrl: './map.component.html',
    styleUrls: ['./map.component.css'],
    providers: [ActivityService]
})
export class MapComponent implements OnInit {

    private code: string;

    private access_token: string;
    private client_secret: string;
    private client_id: string;
    private redirect_url: string;

    private strava_payload: StravaActivity[];
    private last_page_reached: boolean;


    constructor(private activatedRoute: ActivatedRoute,
        private config: Config,
        private activityService: ActivityService) {
    }


    ngOnInit(): void {
        this.access_token = this.config.get("access_token");
        this.client_secret = this.config.get("client_secret");
        this.client_id = this.config.get("client_id");
        this.redirect_url = this.config.get("redirect_uri");

        // subscribe to router event and capture code value
        this.activatedRoute
            .queryParams
            .subscribe(params => {
                this.code = params['code'];
            });

        this.activityService.getToken(this.code, this.client_id, this.client_secret)
            .then(access_token => this.retrieveActivities(access_token));
    }

    //Make multuiple async calls to retrieve all the client activities
    async retrieveActivities(data: any): Promise<void> {

        this.access_token = data.access_token;
        this.strava_payload = [];
        this.last_page_reached = false;
        let page_count = 1;
        while (!this.last_page_reached) {
            await this.activityService.getUserActivities(this.access_token, page_count++)
                .then(data => { this.processResponse(data); });
        }
    }

    processResponse(data: StravaActivity[]): void {
        if (data.length == 0 || isDevMode()) {
            this.last_page_reached = true;
        }
        this.strava_payload = this.strava_payload.concat(data);
    }


}
