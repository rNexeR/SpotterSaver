
import { Component, ViewEncapsulation } from '@angular/core';
@Component({
  selector: 'unlogged-cmp',
  encapsulation: ViewEncapsulation.None,
  template: `	
  				<router-outlet></router-outlet>
             `
})

export class UnloggedComponent {
	constructor(){

	}

}

/*
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */
