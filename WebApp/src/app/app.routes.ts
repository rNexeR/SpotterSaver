import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/logged/home/home.component';
import {UnloggedComponent} from './components/unlogged/unlogged.component';
import {LoggedComponent} from './components/logged/logged.component';
import {CheckSessionComponent} from './components/check_session.component';


import { DataResolver } from './app.resolver';


export const ROUTES: Routes = [
  { path: '',      component:  CheckSessionComponent},
  { path: 'unlogged',  component: UnloggedComponent },
  { path: 'logged', component: LoggedComponent, children: [
      {path: '', component: HomeComponent}
    ] },
  {path: 'verifyingSession', component: CheckSessionComponent},
  { path: '**', redirectTo: 'unlogged'}
];
