import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/logged/home/home.component';
import {UnloggedComponent} from './components/unlogged/unlogged.component';
import {LoggedComponent} from './components/logged/logged.component';
import {ProfileComponent} from './components/logged/profile/profile.component';
import {CheckSessionComponent} from './components/check_session.component';
import {RegisterComponent} from './components/unlogged/register/register.component';
import {LoginComponent} from './components/unlogged/login/login.component'
import {EditProfileComponent} from './components/logged/subcomponents/edit/edit.component';
import {RegisterEventComponent} from './components/logged/register-event/register_event.component';
import {ShowEventComponent} from './components/logged/register-event/show-event/show_event.component';
import {EditEventComponent} from './components/logged/register-event/edit-event/edit_event.component';

import { DataResolver } from './app.resolver';


export const ROUTES: Routes = [
  { path: '',      component:  CheckSessionComponent},
  { path: 'unlogged',  component: UnloggedComponent, children: [
  	{ path: '',  component: LoginComponent },
  	{ path: 'register',  component: RegisterComponent }
  ] },
  { path: 'logged', component: LoggedComponent, children: [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'profile', component: ProfileComponent},
    {path: 'profile/edit', component: EditProfileComponent},
    {path: 'register-event/edit-event', component: EditEventComponent},
    {path: 'register-event/show-event', component: ShowEventComponent},
    {path: 'register-event', component: RegisterEventComponent}
    ] },
  {path: 'verifyingSession', component: CheckSessionComponent},
  { path: '**', redirectTo: 'unlogged'}
];
