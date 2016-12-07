import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router }   from '@angular/router';
import {Session} from '../../../structures/session';
import {SessionService} from '../../../services/session.service';
@Component({
  selector: 'register-cmp',
  templateUrl: './register.html'
})
export class RegisterComponent implements OnInit {
	public firstName = "";
	public lastName = "";
	public birthday = "";
	public email = "";
	public password = "";
	public cellphone = "";
	public creditCard = "";

  constructor(private _session:SessionService, private _router:Router) { }

  ngOnInit() {
  }

  register(){
  	this._session.setSession(new Session("token",this.email));
    this._router.navigate(['logged']);
  }

}
