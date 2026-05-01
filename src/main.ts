import 'zone.js';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from '../AngularFrontend/src/app/app.component';
import { appConfig } from '../AngularFrontend/src/app/app.config';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
