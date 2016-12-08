import { Component, OnInit } from '@angular/core';
import {Session} from '../../../structures/session';
import {SessionService} from '../../../services/session.service';
import {EventsEmitter} from '../../../services/event-emitter.service';
import { Subscription }   from 'rxjs/Subscription';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav.html'
})

export class NavBarComponent implements OnInit {


	public username : string ="";
  public hasSession : Boolean = false;

  event : string = "";
  subscription : Subscription;
  
  constructor(private _session:SessionService, private _emitter: EventsEmitter) { }

  ngOnInit() {
    this.hasSession = this._session.hasSession();
  	if(this.hasSession){
		  var session : Session = this._session.getSession();
	    this.username = session.username;
    }

    this.subscription = this._emitter.getSessionEvents().subscribe(
        data => {this.event = data; this.validateSession()}
      );
	}

  validateSession() {
    console.log(this.event);
    if(this.event.toLowerCase() == "login")
      this.hasSession = true;
    else
      this.hasSession = false;
  }

}