import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { ActivityComponent } from '../activity/activity.component';
import { ActivityDetailComponent } from '../activity/activity-detail.component';
import { MapComponent } from '../map/map.component';

const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'detail/:id', component: ActivityDetailComponent },
    { path: 'activities', component: ActivityComponent },
    { path: 'map', component: MapComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
