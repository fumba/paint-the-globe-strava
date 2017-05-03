import { Component } from '@angular/core';
import { Activity } from './activity';
import { Mode } from '../shared/mode';
import { ActivityService } from '../shared/activity.service';
import { OnInit } from '@angular/core';

import { Router } from '@angular/router';

//activities component
@Component({
  selector: 'activities',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css'],
  providers: [ActivityService]
})

export class ActivityComponent implements OnInit {
  mode: Mode = { name: 'usa', selected: false };
  title: String = 'paint the globe - strava!';
  activities: Activity[];
  selectedActivity: Activity;

  constructor(
    private activityService: ActivityService,
    private router: Router
  )
  { }

  ngOnInit(): void {
    this.getActivities();
  }

  //sets the selected activity when the user clicks on the activity
  onSelect(activity: Activity): void {
    this.selectedActivity = activity;
  }

  //gets the activities from the service
  getActivities(): void {
    this.activityService.getActivities().then(activities => this.activities = activities);
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedActivity.id]);
  }


  add(title: string): void {
    title = title.trim();
    if (!title) { return; }
    this.activityService.create(title)
      .then(activity => {
        this.activities.push(activity);
        this.selectedActivity = null;
      });
  }

  delete(activity: Activity): void {
    this.activityService
      .delete(activity.id)
      .then(() => {
        this.activities = this.activities.filter(h => h !== activity);
        if (this.selectedActivity === activity) { this.selectedActivity = null; }
      });
  }



};