import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  mode: Mode = { name: 'usa' };
  title:String = 'paint the globe - strava!';
}
export class Mode {
  name: string;
}