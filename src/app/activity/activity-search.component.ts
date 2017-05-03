import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
// Observable class extensions
import 'rxjs/add/observable/of';
// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import { ActivitySearchService } from '../shared/activity-search.service';
import { Activity } from '../activity/activity';
@Component({
    selector: 'activity-search',
    templateUrl: './activity-search.component.html',
    styleUrls: ['./activity-search.component.css'],
    providers: [ActivitySearchService]
})
export class ActivitySearchComponent implements OnInit {

    activities: Observable<Activity[]>;
    private searchTerms = new Subject<string>();

    constructor(
        private activitySearchService: ActivitySearchService,
        private router: Router) { }

    // Push a search term into the observable stream.
    search(term: string): void {
        this.searchTerms.next(term);
    }

    ngOnInit(): void {
        this.activities = this.searchTerms
            .debounceTime(300)        // wait 300ms after each keystroke before considering the term
            .distinctUntilChanged()   // ignore if next search term is same as previous
            .switchMap(term => term   // switch to new observable each time the term changes
                // return the http search observable
                ? this.activitySearchService.search(term)
                // or the observable of empty heroes if there was no search term
                : Observable.of<Activity[]>([]))
            .catch(error => {
                // TODO: add real error handling
                console.log(error);
                return Observable.of<Activity[]>([]);
            });
    }

    gotoDetail(activity: Activity): void {
        let link = ['/detail', activity.id];
        this.router.navigate(link);
    }
}