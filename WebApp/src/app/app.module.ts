import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { removeNgStyles, createNewHosts, createInputTransfer } from '@angularclass/hmr';

/*
 * Platform and Environment providers/directives/pipes
 */
import { ENV_PROVIDERS } from './environment';
import { ROUTES } from './app.routes';
// App is our top level component
import { AppComponent } from './app.component';
import { APP_RESOLVER_PROVIDERS } from './app.resolver';
import { HomeComponent } from './components/logged/home/home.component';
import {NavBarComponent} from './components/logged/subcomponents/navbar/navbar.component';
import {UnloggedComponent} from './components/unlogged/unlogged.component';
import {RegisterComponent} from './components/unlogged/register/register.component';
import {LoggedComponent} from './components/logged/logged.component';
import {ChatroomComponent} from './components/logged/chatroom/chatroom.component';
import {ProfileComponent} from './components/logged/profile/profile.component';
import {RegisterEventComponent} from './components/logged/register-event/register_event.component';
import {UnloggedHomeComponent} from './components/unlogged/home/home.component';
import {CheckSessionComponent} from './components/check_session.component';
import {LoginComponent} from './components/unlogged/login/login.component'
import {EditProfileComponent} from './components/logged/subcomponents/edit/edit.component';
import {ChatSidebarComponent} from './components/logged/subcomponents/chat-sidebar/chat_sidebar.component';
//import {} from './components/.component';

import {ToasterModule, ToasterService} from 'angular2-toaster/angular2-toaster';
import {EventsEmitter} from './services/event-emitter.service';
import {SessionService} from './services/session.service';
import {ClientsService} from './services/clients.service';

//import {} from './services/.service';

import { AgmCoreModule } from 'angular2-google-maps/core';


// Application wide providers
const APP_PROVIDERS = [
  ...APP_RESOLVER_PROVIDERS
];

/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    UnloggedComponent,
    UnloggedHomeComponent,
    CheckSessionComponent,
    LoggedComponent,
    RegisterComponent,
    LoginComponent,
    ProfileComponent,
    EditProfileComponent,
    RegisterEventComponent,
    ChatroomComponent,
    ChatSidebarComponent
  ],
  imports: [ // import Angular's modules
    BrowserModule,
    FormsModule,
    HttpModule,
    ToasterModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAlqeDp-qIydV1m1mO36iZ4j4Jo7V66u9E'
    }),
    RouterModule.forRoot(ROUTES, { useHash: true, preloadingStrategy: PreloadAllModules })
  ],
  providers: [ // expose our Services and Providers into Angular's dependency injection
    ENV_PROVIDERS,
    APP_PROVIDERS,
    EventsEmitter,
    ToasterService,
    SessionService,
    ClientsService
  ]
})
export class AppModule {
  constructor(public appRef: ApplicationRef) {}

}

