import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {ClientsService} from '../../../../services/clients.service';

@Component({
  selector: 'chat-area-cmp',
  templateUrl: './chat-area.html'
})
export class ChatAreaComponent implements OnInit {
  // @Input() clients;
  // @Output() selectedUser = new EventEmitter();
  // public current_name : string;

  constructor() {

  }

  ngOnInit() {
  	
  }

}
