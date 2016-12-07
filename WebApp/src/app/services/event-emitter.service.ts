import {Injectable, EventEmitter} from "@angular/core";
import {Component} from '@angular/core';
import { Subject } from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class EventsEmitter{
	private sessionChange: Subject<string> = new Subject<string>();
	private foldersChange: Subject<string> = new Subject<string>();
	
	constructor(){

	}

	createSessionEvent(name: string){
		this.sessionChange.next(name);
	}

	getSessionEvents() : Observable<string>{
		return this.sessionChange.asObservable();
	}

	createFoldersEvents(name: string){
		this.foldersChange.next(name);
	}

	getFoldersEvents(){
		return this.foldersChange.asObservable();
	}
}