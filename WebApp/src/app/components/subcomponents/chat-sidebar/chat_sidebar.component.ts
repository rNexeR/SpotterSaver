import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {ClientsService} from '../../../services/clients.service';

@Component({
  selector: 'chat-sidebar-cmp',
  templateUrl: './chat-sidebar.html'
})
export class ChatSidebarComponent implements OnInit {
  @Input() clients;
  @Output() selectedUser = new EventEmitter();
  public current_name : string;

  constructor(private _clients : ClientsService) {

  }

  ngOnInit() {
    
  }

  selectUser(name){
    console.log(name);
    this.current_name = name;
    this.selectedUser.emit({value: this.current_name});
  }

}