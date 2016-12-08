import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router }   from '@angular/router';
import {Session} from '../../structures/session';
import {SessionService} from '../../services/session.service';
import {EventsEmitter} from '../../services/event-emitter.service';

@Component({
  selector: 'login-cmp',
  templateUrl: './login.html'
})
export class LoginComponent implements OnInit {
	public username = "";

  constructor(private _session:SessionService, private _router:Router, private _events: EventsEmitter) { }

  ngOnInit(){

  }

  login(){
  	this._session.setSession(new Session("token",this.username));
    this._events.createSessionEvent("Login");
  	this._router.navigate(['/logged']);
  }
}