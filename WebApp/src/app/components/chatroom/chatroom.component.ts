import { Component, OnInit } from '@angular/core';
import {ClientsService} from '../../services/clients.service';

@Component({
  selector: 'chatroom-cmp',
  templateUrl: './chatroom.html'
})
export class ChatroomComponent implements OnInit {
  public clients : any;
  public current_user : string;

  constructor(private _clients : ClientsService) { 

  }

  ngOnInit() {
  	this._clients.getClients()
  		.then(
  			data => {this.clients = data;}
  			);
  }

  userUpdated(event){
  	console.log("chatroom");
  	console.log(event.value);
  	this.current_user = event.value;
  }

}
