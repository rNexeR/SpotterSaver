import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Event } from '../../../structures';

@Component({
  selector: 'register-event-cmp',
  templateUrl: './register-event.html'
})
export class RegisterEventComponent implements OnInit {
 
  constructor(private router: Router) { }

  ngOnInit() {
  }

  createEvent(){
  	this.router.navigate(['/logged/register-event/show-event']);
  }
}
