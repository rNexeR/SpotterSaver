import { Component, OnInit } from '@angular/core';
import {SessionService} from '../../../services/session.service';
import {EventsEmitter} from '../../../services/event-emitter.service';

@Component({
  selector: 'logged-nav-bar',
  templateUrl: './nav.html'
})
export class LoggedNavBarComponent implements OnInit {
  
  constructor(private _session : SessionService, private _events: EventsEmitter) { }

  ngOnInit() {
  	
  }

  logout(){
  	this._session.deleteSession();
  	this._events.createSessionEvent("LogOut");
  }

}