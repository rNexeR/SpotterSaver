import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'register-event-cmp',
  templateUrl: './register-event.html'
})
export class RegisterEventComponent implements OnInit {

  constructor(private _router : Router) { }

  ngOnInit() {
  }

  createEvent(){
  	this._router.navigate['/home'];
  }

}
