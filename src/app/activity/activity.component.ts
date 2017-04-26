import { Component } from '@angular/core';
import { Activity } from './activity';
import { Mode } from '../shared/mode';
import { ActivityService } from '../shared/activity.service';
import { OnInit } from '@angular/core';


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

  constructor(private activityService: ActivityService) { }

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

};