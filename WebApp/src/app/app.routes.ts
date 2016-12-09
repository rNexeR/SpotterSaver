import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import {UnloggedComponent} from './components/unlogged.component';
import {LoggedComponent} from './components/logged.component';
import {ProfileComponent} from './components/profile/profile.component';
import {CheckSessionComponent} from './components/check_session.component';
import {RegisterComponent} from './components/register/register.component';
import {LoginComponent} from './components/login/login.component'
import {EditProfileComponent} from './components/subcomponents/edit/edit.component';
import {RegisterEventComponent} from './components/register-event/register_event.component';
import {ChatroomComponent} from './components/chatroom/chatroom.component';
import {FilterComponent} from './components/filter/filter.component';
import {AboutComponent} from './components/about/about.component';
import {ContactComponent} from './components/contact/contact.component';

import { DataResolver } from './app.resolver';


export const ROUTES: Routes = [
  { path: '',      component:  HomeComponent},
  { path: 'home',      component:  HomeComponent},
	{ path: 'login',  component: LoginComponent },
  { path: 'search/:searched', component: FilterComponent},
	{ path: 'register',  component: RegisterComponent },
  { path: 'about',  component: AboutComponent },
  { path: 'contact',  component: ContactComponent },
  { path: 'logged', component: LoggedComponent, children: [
    {path: '', component: HomeComponent},
    {path: 'search/:searched', component: FilterComponent},
    {path: 'home', component: HomeComponent},
    {path: 'profile', component: ProfileComponent},
    {path: 'profile/edit', component: EditProfileComponent},
    {path: 'register-event', component: RegisterEventComponent}
    ] },
  { path: 'try', component: ChatroomComponent},
  {path: 'verifyingSession', component: CheckSessionComponent},
  { path: '**', redirectTo: 'unlogged'}
];
