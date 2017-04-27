import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ActivityComponent } from '../activity/activity.component';
import { ActivityDetailComponent } from '../activity/activity-detail.component';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';

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
    RouterModule.forRoot([
      {
        path: 'activities',
        component: ActivityComponent
      }, {
        path: 'dashboard',
        component: DashboardComponent
      }, {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      },
      {
        path: 'detail/:id',
        component: ActivityDetailComponent
      },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
