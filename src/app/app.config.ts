// Angular
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { provideRouter, withViewTransitions } from '@angular/router';

// Routes
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      routes,
      withViewTransitions({
        skipInitialTransition: true,
        // onViewTransitionCreated(transitionInfo) {
        //   console.log(transitionInfo);
        // },
      })
    ),
    importProvidersFrom(HttpClientModule),
  ],
};
