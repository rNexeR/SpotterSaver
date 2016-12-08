import { Component, OnInit } from '@angular/core';
import {Session} from '../../../structures/session';
import {SessionService} from '../../../services/session.service';
@Component({
  selector: 'nav-bar',
  templateUrl: './nav.html'
})
export class NavBarComponent implements OnInit {


	public username : string ="";
  public hasSession : Boolean = false;
  
  constructor(private _session:SessionService) { }

  ngOnInit() {
    this.hasSession = this._session.hasSession();
  	if(this.hasSession){
		var session : Session = this._session.getSession();
	  	this.username = session.username;
	}
  	
  }

}