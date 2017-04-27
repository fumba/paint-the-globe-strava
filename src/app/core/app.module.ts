import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ActivityComponent } from '../activity/activity.component';
import { ActivityDetailComponent } from '../activity/activity-detail.component';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';

import { AppRoutingModule }     from '../core/app-routing.module';

@NgModule({

  declarations: [
    AppComponent,
    ActivityDetailComponent,
    ActivityComponent,
    DashboardComponent
  ],
  imports: [ 
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
