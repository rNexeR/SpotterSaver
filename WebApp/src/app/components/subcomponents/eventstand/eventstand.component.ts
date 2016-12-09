import { Component, OnInit, Input } from '@angular/core';
import { Router }   from '@angular/router';
import {Event} from '../../../structures/event';
import {EventsService} from '../../../services/events.service';
@Component({
  selector: 'event-stand',
  templateUrl: './event.html'
})
export class EventStandComponent implements OnInit {
	public events = [];
  @Input() filter_by = "";
	@Input() category = "";
  public currentEvent = new Event("","",50,"",1,"","","","");
  constructor(private _router : Router, private _events : EventsService) { }

  ngOnInit() {
        this._events.getEvents()
      .then(
        data => {this.events = data;}
        );
  }

  showModal(event){
    this.currentEvent = event;
  }

  buying(){
    this._router.navigate(['/logged/payment']);
  }
}