import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { APP_ROUTES } from './app-routes';
import { RootComponent } from './components/root/root.component';

import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(RootComponent, {
  providers: [importProvidersFrom(RouterModule.forRoot(APP_ROUTES))],
}).catch((err) => console.error(err));
