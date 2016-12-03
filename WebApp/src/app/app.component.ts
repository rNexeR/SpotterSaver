/*
 * Angular 2 decorators and services
 */
import { Component, ViewEncapsulation } from '@angular/core';

//import { AppState } from './app.service';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  template: `  	<router-outlet></router-outlet>
             `,
  styleUrls: [	'../assets/bootstrap/css/bootstrap.css',
			  	'../assets/elegant-font/code/style.css',
	            '../assets/css/animate.css',
	            '../assets/css/magnific-popup.css',
	            '../assets/flexslider/flexslider.css',
	            '../assets/css/form-elements.css',
	            '../assets/css/style.css',
	            '../assets/css/media-queries.css']
})
export class AppComponent {

}

/*
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */
