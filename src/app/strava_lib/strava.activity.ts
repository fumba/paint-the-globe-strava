//StravaActivity APIv3
import { Athlete } from './athlete';

export class StravaActivity {
    id: Number;

    //indicates level of detail
    resource_state: Number;

    //provided at upload
    external_id: string;

    upload_id: Number;

    //meta or summary
    athlete: Athlete;

    name: string;

    description: string;

    //meters
    distance: Number;

    //seconds
    moving_time: Number;

    //seconds
    elapsed_time: Number;

    //meters
    total_elevation_gain: Number;

    //meters
    elev_high: Number;

    //meters
    elev_low: Number;

    //activity type, ie. ride, run, swim, etc.
    type: string;

    start_date: Date;

    start_date_local: Date;

    timezone: string;

    //[latitude, longitude]
    start_latlng: Array<string>;

    //[latitude, longitude]
    end_latlng: Array<string>;

    location_city: string;

    //DEPRECATED
    location_state: string;

    //DEPRECATED
    location_country: string;

    //DEPRECATED
    achievement_count: Number;

    kudos_count: Number;

    comment_count: Number;

    // number of athletes taking part in this “group activity”. >= 1
    athlete_count: Number;

    //number of Instagram photos
    photo_count: Number;

    //total number of photos (Instagram and Strava)
    total_photo_count: Number;

    //photos summary
    photos: any;

    //detailed representation of the route
    map: any;

    trainer: boolean;

    commute: boolean;

    manual: boolean;

    private: boolean;

    //the name of the device used to record the activity.
    device_name: string;

    //the token used to embed a Strava activity in the form 
    //www.strava.com/activities/[activity_id]/embed/[embed_token].
    embed_token: string;

    flagged: boolean;

    //for runs: 0 -> ‘default’, 1 -> ‘race’, 2 -> ‘long run’, 3 -> ‘workout’; for rides: 10 -> ‘default’, 11 -> ‘race’, 12 -> ‘workout’
    workout_type: Number;

    //corresponds to a bike or pair of shoes included in athlete details
    gear_id: string;

    //gear summary
    gear: any;

    //meters per second
    average_speed: Number;

    //meters per second
    max_speed: Number;

    //RPM, if provided at upload
    average_cadence: Number;

    //degrees Celsius, if provided at upload
    average_temp: Number;

    //max_watts:	integer rides with power meter data only
    //rides only
    average_watts: Number;

    //rides with power meter data only 
    //similar to xPower or Normalized Power
    weighted_average_watts: Number;

    //uses estimated power if necessary
    // rides only 
    kilojoules: Number;

    //true if the watts are from a power meter, false if estimated
    device_watts: boolean;

    //true if recorded with heartrate 
    has_heartrate: boolean;

    //only if recorded with heartrate 
    //average over moving portion
    average_heartrate: Number;

    //only if recorded with heartrate
    max_heartrate: Number;

    //kilocalories, uses kilojoules for rides and speed/pace for runs
    calories: Number;

    //a measure of heartrate intensity, available on premium users’ activities only
    suffer_score: Number;

    //if the authenticated athlete has kudoed this activity
    has_kudoed: boolean;

    //array of summary representations of the segment efforts, segment effort ids must be represented as 64-bit datatypes
    segment_efforts: Array<any>;

    //running activities only
    //array of metric split summaries 
    splits_metric: Array<any>;

    //running activities only
    //array of standard split summaries 
    splits_standard: Array<any>;

    //array of lap summaries 
    laps: Array<any>

    //array of best effort summaries 
    //running activities only
    best_efforts: Array<any>;

}