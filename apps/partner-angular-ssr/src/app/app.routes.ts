import { Route } from '@angular/router';
import { RouteOneComponent } from './components/route-one/route-one.component';
import { RouteTwoComponent } from './components/route-two/route-two.component';

export const appRoutes: Route[] = [
  {
    path: 'route-one',
    component: RouteOneComponent,
  },
  {
    path: 'route-two',
    component: RouteTwoComponent,
  },
  {
    path: '',
    redirectTo: 'route-one',
    pathMatch: 'full',
  },
];
