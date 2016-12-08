import { Component, OnInit } from '@angular/core';
import {ClientsService} from '../../../services/clients.service';
import {MessagesService} from '../../../services/messages.service';

@Component({
  selector: 'chatroom-cmp',
  templateUrl: './chatroom.html'
})
export class ChatroomComponent implements OnInit {
  public clients : any;
  public messages = [];
  public current_user : string;

  constructor(private _clients : ClientsService, private _messages : MessagesService) { 

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

  	this._messages.getMessages().then(
      data => { this.messages = data[this.current_user]; console.log(this.messages);}
      );
  }

}
