import { Component, OnInit } from '@angular/core';
import {Session} from '../../../structures/session';
import {SessionService} from '../../../services/session.service';
import {EventsEmitter} from '../../../services/event-emitter.service';
import {Router} from '@angular/router';

@Component({
  selector: 'logged-nav-bar',
  templateUrl: './nav.html'
})
export class LoggedNavBarComponent implements OnInit {

  public username : string ="";
  
  constructor(private _session : SessionService, private _events: EventsEmitter, private _router: Router) { }

  ngOnInit() {
  	var session : Session = this._session.getSession();
    this.username = session.username;
  }

  logout(){
  	this._session.deleteSession();
  	this._events.createSessionEvent("LogOut");
    this._router.navigate(['/home']);
  }

}