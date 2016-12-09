import { Component, OnInit, Input } from '@angular/core';
import { Router }   from '@angular/router';

@Component({
  selector: 'event-stand',
  templateUrl: './event.html'
})
export class EventStandComponent implements OnInit {
	@Input() events;
  @Input() filter_by = "";
	@Input() category = "";
  constructor() { }

  ngOnInit() {
  }
}