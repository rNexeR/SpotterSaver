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
import {UnloggedHomeComponent} from './components/unlogged/home/home.component';
import {CheckSessionComponent} from './components/check_session.component';
//import {} from './components/.component';

import {ToasterModule, ToasterService} from 'angular2-toaster/angular2-toaster';
import {EventsEmitter} from './services/event-emitter.service';
import {SessionService} from './services/session.service';

//import {} from './services/.service';

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
    RegisterComponent
  ],
  imports: [ // import Angular's modules
    BrowserModule,
    FormsModule,
    HttpModule,
    ToasterModule,
    RouterModule.forRoot(ROUTES, { useHash: true, preloadingStrategy: PreloadAllModules })
  ],
  providers: [ // expose our Services and Providers into Angular's dependency injection
    ENV_PROVIDERS,
    APP_PROVIDERS,
    EventsEmitter,
    ToasterService,
    SessionService
  ]
})
export class AppModule {
  constructor(public appRef: ApplicationRef) {}

}

