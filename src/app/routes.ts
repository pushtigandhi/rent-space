import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {DetailsComponent} from './details/details.component';
import { UserLoginComponent } from './user/user-login/user-login.component';

const routeConfig: Routes = [
    {
      path: '',
      component: UserLoginComponent,
      title: 'Login page',
    },
    {
      path: 'home',
      component: HomeComponent,
      title: 'Home page',
    },
    {
      path: 'details/:id',
      component: DetailsComponent,
      title: 'Home details',
    },
];
export default routeConfig;