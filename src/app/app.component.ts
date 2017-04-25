import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  mode: Mode = { name: 'usa', selected:false };
  title:String = 'paint the globe - strava!';
}
export class Mode {
  name: string;
  selected: Boolean;
}