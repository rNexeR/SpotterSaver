import {Injectable, EventEmitter} from "@angular/core";
import {Component} from '@angular/core';
import { Subject } from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';
import {Session} from '../structures/session';

@Injectable()
export class SessionService{
	getSession(){
		var session = sessionStorage.getItem('session');
		return JSON.parse(session);	
	}

	setSession(user : Session){
		sessionStorage.setItem('session', JSON.stringify(user));
	}

	deleteSession(){
		sessionStorage.removeItem('session');
	}

	hasSession(){
		return sessionStorage.length == 1;
	}
}