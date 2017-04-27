import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { Activity } from './activity';
import { ActivityService } from '../shared/activity.service';
import 'rxjs/add/operator/switchMap';


@Component({
    selector: 'activity-detail',
    templateUrl: './activity-detail.component.html',
    providers: [ActivityService]
})
export class ActivityDetailComponent implements OnInit {
    @Input() activity: Activity;

    constructor(
        private activityService: ActivityService,
        private route: ActivatedRoute,
        private location: Location
    ) { }

    ngOnInit(): void {
        this.route.params.switchMap
            ((params: Params) => this.activityService.getActivity(+params['id'])).subscribe(activty => this.activity = activty);
    }

    goBack(): void {
        this.location.back();
    }

}