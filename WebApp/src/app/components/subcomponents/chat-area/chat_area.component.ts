import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'chat-area-cmp',
  templateUrl: './chat-area.html'
})
export class ChatAreaComponent implements OnInit {
  @Input() messages : any[] = [];

  constructor() {

  }

  ngOnInit() {
  	
  }

}