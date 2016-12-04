import { Component, OnInit } from '@angular/core';
import {Session} from '../../../structures/session';
import {SessionService} from '../../../services/session.service';
@Component({
  selector: 'home-cmp',
  templateUrl: './home.html'
})
export class HomeComponent implements OnInit {

  constructor(private _session:SessionService) { }

  ngOnInit() {
  	//var session = this._session.getSession();
  }



}
