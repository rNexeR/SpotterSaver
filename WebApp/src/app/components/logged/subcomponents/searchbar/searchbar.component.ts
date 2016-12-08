import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'search-bar',
  templateUrl: './search.html'
})
export class SearchBarComponent implements OnInit {


	public search_text : string ="";
  constructor() { }

  ngOnInit() {
  }

  search(){
  	alert("searching "+this.search_text);
  }
}