import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router }   from '@angular/router';
import {Session} from '../../../structures/session';
import {SessionService} from '../../../services/session.service';

@Component({
  selector: 'login-cmp',
  templateUrl: './login.html'
})
export class LoginComponent implements OnInit {
	public username = "";

  constructor(private _session:SessionService, private _router:Router) { }

  ngOnInit(){

  }

  login(){
  	alert(this.username);
  	this._session.setSession(new Session("token","username"));
  }
}