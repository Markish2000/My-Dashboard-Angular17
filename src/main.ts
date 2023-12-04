// Angular
import { bootstrapApplication } from '@angular/platform-browser';

// Components
import { AppComponent } from './app/app.component';

// Configurations
import { appConfig } from './app/app.config';

bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err)
);
