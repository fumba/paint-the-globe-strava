import { Injectable } from '@angular/core';
import { Activity } from '../activity/activity';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ActivityService {

    private activitiesurl = "api/activities";
    private headers = new Headers({ 'Content-Type': 'application/json' });

    constructor(private http: Http) { }

    getActivities(): Promise<Activity[]> {
        return this.http.get(this.activitiesurl)
            .toPromise()
            .then(response => response.json().data as Activity[])
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    getActivity(id: number): Promise<Activity> {
        const url = `${this.activitiesurl}/${id}`;
        return this.http.get(url)
            .toPromise()
            .then(response => response.json().data as Activity)
            .catch(this.handleError);
    }

    update(activity: Activity): Promise<Activity> {
        const url = `${this.activitiesurl}/${activity.id}`;
        return this.http
            .put(url, JSON.stringify(activity), { headers: this.headers })
            .toPromise()
            .then(() => activity)
            .catch(this.handleError);
    }

    create(title: string): Promise<Activity> {
        return this.http
            .post(this.activitiesurl, JSON.stringify({ title: title }), { headers: this.headers })
            .toPromise()
            .then(res => res.json().data as Activity)
            .catch(this.handleError);
    }

    delete(id: Number): Promise<void> {
        const url = `${this.activitiesurl}/${id}`;
        return this.http.delete(url, { headers: this.headers })
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
    }



}