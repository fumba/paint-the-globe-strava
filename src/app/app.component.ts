import { Component } from '@angular/core';
import { Activity } from './activity/activity';
import { Mode } from './mode/mode';

//app-root component
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  mode: Mode = { name: 'usa', selected: false };
  title: String = 'paint the globe - strava!';
  activities: Activity[] = ACTIVITIES;
  selectedActivity: Activity;

  //sets the selected activity when the user clicks on the activity
  onSelect(activity: Activity): void {
    this.selectedActivity = activity;
  }
};

//List of activities by the user
const ACTIVITIES: Activity[] = [
  { id: 11, title: 'run 1', include: true },
  { id: 12, title: 'bike 1', include: true },
  { id: 13, title: 'walk 1', include: true },
  { id: 14, title: 'run 2', include: true },
  { id: 15, title: 'bike 2', include: false },
  { id: 16, title: 'walk 2', include: false },
  { id: 17, title: 'run 3', include: false },
  { id: 18, title: 'walk 3', include: false },
  { id: 19, title: 'bike 3', include: false }
];