
import { Component, ViewEncapsulation, OnInit, Pipe } from '@angular/core';
import { ActivatedRoute, Router }   from '@angular/router';
import {EventsService} from '../../../services/events.service';

@Component({
  selector: 'filter-cmp',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './filter.html'
})

export class FilterComponent implements OnInit {

	public searched : string;
	public events : any;

	constructor(private _activated: ActivatedRoute ,private _router : Router, private _events : EventsService){

	}

	ngOnInit(){
		this._activated.params.subscribe(
            params => this.searched = params['searched']
        );
    this._events.getEvents()
    	.then(
    			data => {this.events = data}
    		);
	}

}

/*
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */
