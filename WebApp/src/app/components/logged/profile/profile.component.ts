import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'profile-cmp',
  templateUrl: './profile.html'
})
export class ProfileComponent implements OnInit {
  	public firstName = "Clara";
	public lastName = "Estefania";
	public birthday = "";
	public email = "";
	public password = "";
	public cellphone = "";
	public creditCard = "";

  constructor() { }

  ngOnInit() {
  }

}
