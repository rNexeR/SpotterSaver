import { Component, OnInit } from '@angular/core';
import {EventsService} from '../../services/events.service';
@Component({
  selector: 'home-cmp',
  templateUrl: './home.html'
})
export class HomeComponent implements OnInit {

	public events = [];

  constructor(private _events : EventsService) { }

  ngOnInit() {
  	this._events.getEvents()
      .then(
        data => {this.events = data;}
        );
  }



}
