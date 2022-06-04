import { Route } from '@angular/router';

export const APP_ROUTES: Route[] = [
  {
    path: 'home',
    loadComponent: () =>
      import('./components/home/home.component').then(
        (mod) => mod.HomeComponent
      ),
  },
];
