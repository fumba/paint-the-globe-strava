import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/core/app.module';
import { environment } from './environments/environment';
import { Config } from "./app/core/app.config";

if (environment.production) {
  enableProdMode();
}

//Bootstrap - Load configuration file for strava
Config.loadInstance('/assets/config/strava.config.json')
  .then(() => {
    platformBrowserDynamic().bootstrapModule(AppModule);
  });
