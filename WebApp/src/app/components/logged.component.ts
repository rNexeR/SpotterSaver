
import { Component, ViewEncapsulation } from '@angular/core';
import {SessionService} from '../services/session.service';
import { ActivatedRoute, Router }   from '@angular/router';

@Component({
  selector: 'logged-cmp',
  encapsulation: ViewEncapsulation.None,
  template: `	<nav-bar></nav-bar>
  				<router-outlet></router-outlet>
             `
})

export class LoggedComponent {
	constructor(private _session : SessionService, private _router : Router){

	}

	ngOnInit(){
		if(!this._session.hasSession()){
			this._router.navigate(['unlogged']);
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
