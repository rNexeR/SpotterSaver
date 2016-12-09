import { Component, OnInit } from '@angular/core';
import {EventsService} from '../../services/events.service';
@Component({
  selector: 'profile-cmp',
  templateUrl: './profile.html'
})
export class ProfileComponent implements OnInit {
  	public firstName = "Clara";
	public lastName = "Estefania";
	public gender = "Female";
	public birthday = "30/10/1994";
	public email = "estefania@email.com";
	public password = "12345678";
	public cellphone = "(504) 9868-7315";
	public creditCard = "5214-3698-5001-4872";

  public events = [];
  constructor(private _events : EventsService) { }

  ngOnInit() {
        this._events.getEvents()
      .then(
        data => {this.events = data;}
        );
  }

  getName(){
  	return this.firstName + " " + this.lastName;
  }

}
