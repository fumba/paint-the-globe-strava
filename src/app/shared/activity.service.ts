import { Injectable } from '@angular/core';
import { Activity } from '../activity/activity';
import { ACTIVITIES } from '../activity/mock-activities';

@Injectable()
export class ActivityService {

    getActivities(): Promise<Activity[]> {
        return Promise.resolve(ACTIVITIES);
    }
}