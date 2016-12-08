import { Component, OnInit, Input } from '@angular/core';
import { Router }   from '@angular/router';

@Component({
  selector: 'search-bar',
  templateUrl: './search.html'
})
export class SearchBarComponent implements OnInit {
	@Input() search_text = "";
	
  constructor(private _router : Router) { }

  ngOnInit() {
  }

  search(){
  	this._router.navigate(['/logged/search', this.search_text]);
  }
}