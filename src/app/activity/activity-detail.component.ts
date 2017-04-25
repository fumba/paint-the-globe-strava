import { Component, Input } from '@angular/core';
import { Activity } from './activity';

@Component({
    selector: 'activity-detail',
    templateUrl: './activity-detail.component.html',
})
export class ActivityDetailComponent {
    @Input() activity: Activity;
}