import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'register-cmp',
  templateUrl: './register.html'
})
export class RegisterComponent implements OnInit {
	public firstName = "";
	public lastName = "";
	public birthday = "";
	public email = "";
	public password = "";
	public cellphone = "";
	public creditCard = "";

  constructor() { }

  ngOnInit() {
  }

  register(){
  	alert("Your account has been created succesfully, " + this.firstName)
  }

}
