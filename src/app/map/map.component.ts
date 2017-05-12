import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Config } from "../core/app.config";

import { ActivityService } from '../shared/activity.service';

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

    public strava_payload: any;

    constructor(private activatedRoute: ActivatedRoute, private config: Config, private activityService: ActivityService) {
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

        this.activityService.getToken(this.code, this.client_id, this.client_secret).then(
            (data) => { this.strava_payload = JSON.stringify(data);});

    }
}
