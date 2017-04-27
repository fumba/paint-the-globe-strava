import { Component, OnInit } from '@angular/core';
import { Activity } from '../activity/activity';
import { ActivityService } from '../shared/activity.service';

@Component({
    selector: 'my-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css'],
    providers: [ActivityService]
})
export class DashboardComponent implements OnInit {
    activities: Activity[] = [];

    constructor(private activityService: ActivityService) { }

    ngOnInit(): void {
        this.activityService.getActivities().then(activities => this.activities = activities.slice(0, 3));
    }
}
