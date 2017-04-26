import { Component } from '@angular/core';
import { Activity } from './activity/activity';
import { Mode } from './mode/mode';
import { ActivityService } from './activity/activity.service';
import { OnInit } from '@angular/core';


//app-root component
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ActivityService]
})

export class AppComponent implements OnInit {
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