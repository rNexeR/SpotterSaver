import { Component, OnInit } from '@angular/core';
import {Session} from '../../../structures/session';
import {SessionService} from '../../../services/session.service';
import {EventsEmitter} from '../../../services/event-emitter.service';

@Component({
  selector: 'logged-nav-bar',
  templateUrl: './nav.html'
})
export class LoggedNavBarComponent implements OnInit {

  public username : string ="";
  
  constructor(private _session : SessionService, private _events: EventsEmitter) { }

  ngOnInit() {
  	var session : Session = this._session.getSession();
    this.username = session.username;
  }

  logout(){
  	this._session.deleteSession();
  	this._events.createSessionEvent("LogOut");
  }

}