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
import { HomeComponent } from './components/home/home.component';
import { NavBarComponent } from './components/subcomponents/navbar/navbar.component';
import { UnloggedComponent } from './components/unlogged.component';
import { RegisterComponent } from './components/register/register.component';
import { LoggedComponent } from './components/logged.component';
import { ChatroomComponent } from './components/chatroom/chatroom.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterEventComponent } from './components/register-event/register_event.component';
import { UnloggedHomeComponent } from './components/unloggedhome/home.component';
import { CheckSessionComponent } from './components/check_session.component';
import { SearchBarComponent } from './components/subcomponents/searchbar/searchbar.component';
import { LoginComponent } from './components/login/login.component';
import { FilterComponent } from './components/filter/filter.component';
import { EditProfileComponent } from './components/subcomponents/edit/edit.component';
import { ChatSidebarComponent } from './components/subcomponents/chat-sidebar/chat_sidebar.component';
import { ChatAreaComponent } from './components/subcomponents/chat-area/chat_area.component';
import { UnloggedNavBarComponent } from './components/subcomponents/unloggednavbar/unloggednavbar.component';
import { LoggedNavBarComponent } from './components/subcomponents/loggednavbar/loggednavbar.component';
//import {} from './components/.component';

import {ToasterModule, ToasterService} from 'angular2-toaster/angular2-toaster';
import {EventsEmitter} from './services/event-emitter.service';
import {SessionService} from './services/session.service';
import {ClientsService} from './services/clients.service';
import {EventsService} from './services/events.service';
import {MessagesService} from './services/messages.service';

//import {} from './services/.service';

import {FilterArrayPipe, FilterArrayPipeExactly} from './pipes/filter/filter.component';

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
    RegisterEventComponent,
    SearchBarComponent,
    FilterComponent,
    FilterArrayPipe,
    FilterArrayPipeExactly,
    EditProfileComponent,
    RegisterEventComponent,
    ChatroomComponent,
    ChatSidebarComponent,
    ChatAreaComponent,
    UnloggedNavBarComponent,
    LoggedNavBarComponent
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
    ClientsService,
    EventsService,
    MessagesService
  ]
})
export class AppModule {
  constructor(public appRef: ApplicationRef) {}

}

