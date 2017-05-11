import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ActivityComponent } from '../activity/activity.component';
import { ActivityDetailComponent } from '../activity/activity-detail.component';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { ActivityService } from '../shared/activity.service';
import { MapComponent } from '../map/map.component';

import { AppRoutingModule } from '../core/app-routing.module';

//imports fpr loading and configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { ActivitySearchComponent } from '../activity/activity-search.component';
import { Config } from './app.config';

export function getConfigInstance() {
  return  Config.getInstance('/assets/config/strava.config.json');
}

export let configProvider =
  { provide: Config,
    useFactory: getConfigInstance
  };

@NgModule({

  declarations: [
    AppComponent,
    ActivityDetailComponent,
    ActivityComponent,
    DashboardComponent,
    ActivitySearchComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  providers: [ActivityService, configProvider],
  bootstrap: [AppComponent]
})

export class AppModule { }
