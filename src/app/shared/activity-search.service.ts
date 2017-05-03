import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Activity } from '../activity/activity';
@Injectable()
export class ActivitySearchService {

    constructor(private http: Http) { }

    search(term: string): Observable<Activity[]> {
        return this.http
            .get(`app/activities/?title=${term}`)
            .map(response => response.json().data as Activity[]);
    }
    
}
