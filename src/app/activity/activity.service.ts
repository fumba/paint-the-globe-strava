import { Injectable } from '@angular/core';
import { Activity } from './activity';
import { ACTIVITIES } from './mock-activities';

@Injectable()
export class ActivityService {

    getActivities(): Promise<Activity[]> {
        return Promise.resolve(ACTIVITIES);
    }
}