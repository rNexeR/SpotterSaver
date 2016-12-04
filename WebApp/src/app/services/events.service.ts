import {Injectable, EventEmitter} from "@angular/core";
import {Component} from '@angular/core';
import { Subject } from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class EventsService{
	getEvents(){
        return System.import('../../assets/data/events.json');
    }
}