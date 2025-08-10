import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app';  // Change to AppComponent and correct file name if renamed to app.component.ts

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));