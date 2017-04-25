import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  mode: Mode = { name: 'usa', selected: false };
  title: String = 'paint the globe - strava!';
  activities:Activity[] = ACTIVITIES;
}

//Mode selected by the user
export class Mode {
  name: string;
  selected: Boolean;
}

//User activity
export class Activity {
  id: Number;
  title: string;
}

//List of activities by the user
const ACTIVITIES: Activity[] = [
  { id: 11, title: 'run 1' },
  { id: 12, title: 'bike 1' },
  { id: 13, title: 'walk 1' },
  { id: 14, title: 'run 2' },
  { id: 15, title: 'bike 2' },
  { id: 16, title: 'walk 2' },
  { id: 17, title: 'run 3' },
  { id: 18, title: 'walk 3' },
  { id: 19, title: 'bike 3' }
];