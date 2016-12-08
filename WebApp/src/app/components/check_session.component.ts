
import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { ActivatedRoute, Router }   from '@angular/router';
import {SessionService} from '../services/session.service';

@Component({
  selector: 'check-session-cmp',
  encapsulation: ViewEncapsulation.None,
  template: `	
  				
             `
})

export class CheckSessionComponent implements OnInit {

	constructor(private _session : SessionService, private _router : Router){

	}

	ngOnInit(){
		if(this._session.hasSession()){
			this._router.navigate(['logged']);
		}else{
			this._router.navigate(['login']);
		}
	}

}

/*
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */
