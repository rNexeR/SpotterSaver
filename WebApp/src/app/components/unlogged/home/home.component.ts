import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'uhome-cmp',
  templateUrl: './home.html'
})
export class UnloggedHomeComponent implements OnInit {

	public username="";
  constructor() { }

  ngOnInit() {
  }

}
