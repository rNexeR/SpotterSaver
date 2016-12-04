import { Component, OnInit } from '@angular/core';
import {Session} from '../../../../structures/session';
import {SessionService} from '../../../../services/session.service';
@Component({
  selector: 'nav-bar',
  templateUrl: './nav.html'
})
export class NavBarComponent implements OnInit {


	public username : string ="";
  constructor(private _session:SessionService) { }

  ngOnInit() {
  	var session : Session = this._session.getSession();
  	this.username = session.username;
  }

}